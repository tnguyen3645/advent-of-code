import { readFileSync } from 'fs';

export function readFile(fileName) {
  const data = readFileSync(fileName, 'utf-8');
  const dataArr = data.toString().split("\n");
  return dataArr;
}