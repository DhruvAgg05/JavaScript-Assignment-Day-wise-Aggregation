const solution = require("./sol");

// Given Test Case 1
const input1 = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2,
};

const expected1 = {
  Mon: -6,
  Tue: 2,
  Wed: 2,
  Thu: 4,
  Fri: 6,
  Sat: 8,
  Sun: 2,
};

console.assert(
  JSON.stringify(solution(input1)) === JSON.stringify(expected1),
  "Test Case 1 Failed"
);

// Given Test Case 2
const input2 = {
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4,
};

const expected2 = {
  Mon: 2,
  Tue: 4,
  Wed: 6,
  Thu: 8,
  Fri: 10,
  Sat: 12,
  Sun: 14,
};

console.assert(
  JSON.stringify(solution(input2)) === JSON.stringify(expected2),
  "Test Case 2 Failed"
);

// Case 1 — Only one date given
const input3 = {
  "2020-01-01": 10,
};

const output3 = solution(input3);
console.log("Case 1 Output:", output3);

// Case 2 — Non-consecutive months
const input4 = {
  "2020-01-01": 5,
  "2020-01-10": 15,
};

console.log("Case 2 Output:", solution(input4));

// Case 3 — Negative + Positive values interpolation
const input5 = {
  "2020-02-01": -10,
  "2020-02-03": 10,
};

console.log("Case 3 Output:", solution(input5));

// Case 4 — Multiple missing days
const input6 = {
  "2020-03-01": 2,
  "2020-03-08": 9,
};

console.log("Case 4 Output:", solution(input6));

console.log("All tests completed ✅");
