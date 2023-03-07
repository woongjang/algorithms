import { Dirent } from 'fs';

// 타입스크립트 가지고 놀기..
type UsableOptionsFromDirent = Extract<keyof Dirent, 'name'>;
type UsableDirent = { [k in UsableOptionsFromDirent]: Dirent[UsableOptionsFromDirent] };
type PickFromObject<T, K extends keyof T = keyof T> = { [key in K]: T[K] };

export const getOnlyFolders = (folders: Dirent[]) =>
  folders.filter((folder) => folder.isDirectory());

export const pickKeysFromObject = <T, K = PickFromObject<T>>(object: T, keys: keyof T | (keyof T)[]) =>
  Object.fromEntries(
    (Array.isArray(keys) ? keys : [keys]).map((key) => [key, object[key]])
  ) as K;

export const pickOptionsFromDirents =
  (dirents: Dirent[]) => (options: UsableOptionsFromDirent[] | UsableOptionsFromDirent) =>
    getOnlyFolders(dirents).map((folder) => pickKeysFromObject<Dirent, UsableDirent>(folder, options));
