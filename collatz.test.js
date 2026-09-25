import assert from "node:assert/strict";
import {
  collatzStep,
  collatzSequence,
  stoppingTime,
  maximumValue
} from "../src/collatz.js";

assert.equal(collatzStep(2), 1);
assert.equal(collatzStep(3), 10);

assert.deepEqual(collatzSequence(1), [1]);
assert.deepEqual(collatzSequence(2), [2, 1]);

assert.equal(stoppingTime(1), 0);
assert.equal(stoppingTime(2), 1);
assert.equal(stoppingTime(27), 111);

assert.equal(maximumValue(2), 2);

console.log("すべてのテストに成功しました。");
