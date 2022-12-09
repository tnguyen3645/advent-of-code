import { readFile } from "../../helpers.js";

function getHorderElf(data) {
  let highestCalCount = 0;
  let total = 0;

  data.forEach(val => {
    if (val !== "") {
      total += parseInt(val);
    } else {
      if (total > highestCalCount) highestCalCount = total;
      total = 0;
    }
  })

  return highestCalCount;
}

function getHorderElfs(data) {
  let elfTotals = [];
  let total = 0;

  data.forEach(val => {
    if (val !== "") {
      total += parseInt(val);
    } else {
      elfTotals.push(total)
      total = 0;
    }
  })

  let topThreeElfs = 0;
  for (let i = 0; i < 3; i++) {
    topThreeElfs += getArrayMax(elfTotals);
  }

  return topThreeElfs;
}

function getArrayMax(arr) {
  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  arr.splice(index, 1);

  return max;
}

const data = readFile('2022/day-01/input.txt');
const solution1 = getHorderElf(data);
const solution2 = getHorderElfs(data);
console.log("Part 1 - highest cal count:", solution1);
console.log("Part 2 - total cal count of top 3 elves:", solution2)