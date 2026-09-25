import {
  collatzSequence,
  stoppingTime,
  maximumValue,
  reachesOne
} from "./collatz.js";

export function calculate(start, maxSteps = 100000) {
  const sequence = collatzSequence(start, maxSteps);

  return {
    start,
    sequence,
    steps: stoppingTime(start, maxSteps),
    maximum: maximumValue(start, maxSteps),
    reachesOne: reachesOne(start, maxSteps),
    calculatedAt: new Date().toISOString()
  };
}

export function calculateBatch(values, maxSteps = 100000) {
  return values.map(value => calculate(value, maxSteps));
}
