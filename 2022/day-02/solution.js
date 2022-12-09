import { readFile } from "../../helpers.js";

const points = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

function getScore(data) {
  let score = 0;

  data.forEach((game) => {
    score += points[game];
  });

  return score;
}

const data = readFile("2022/day-02/input.txt");
const score = getScore(data);
console.log("Part 1 - total score:", score);
