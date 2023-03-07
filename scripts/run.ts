import enquirer from 'enquirer';
import { execSync } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import { pickOptionsFromDirents } from './utils';

// test algorithm code
//
//  FIXME: change all algorithm file to *.test.*
// leetcode-84 는 콘솔에 결과를 유추하지만, 테스트 코드 작성후에
// 해당 코드만 테스트를 돌리는 커맨드를 실행하도록 변경 해야할듯
// 일단은 experimental
//

const platformList = await readdir('./src/typescript', { withFileTypes: true });
const { platform } = await enquirer.prompt<{ platform: string }>({
  type: 'select',
  name: 'platform',
  message: 'which platform?',
  choices: pickOptionsFromDirents(platformList)('name'),
});

const problemList = await readdir(`./src/typescript/${platform}`, { withFileTypes: true });

const { problemNum } = await enquirer.prompt<{ problemNum: string }>({
  type: 'autocomplete',
  name: 'problemNum',
  message: 'which problem?',
  choices: pickOptionsFromDirents(problemList)('name'),
});

console.log(
  execSync(`ts-node src/typescript/${platform}/${problemNum}/${problemNum}.ts`).toString()
);
