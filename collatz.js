export function validateStart(n) {
  return Number.isSafeInteger(n) && n > 0;
}

export function collatzStep(n) {
  if (!validateStart(n)) {
    throw new Error("正の安全な整数を入力してください。");
  }

  return n % 2 === 0 ? n / 2 : 3 * n + 1;
}

export function collatzSequence(start, maxSteps = 100000) {
  if (!validateStart(start)) {
    throw new Error("初期値は正の安全な整数である必要があります。");
  }

  if (!Number.isSafeInteger(maxSteps) || maxSteps < 1) {
    throw new Error("最大ステップ数は1以上の整数にしてください。");
  }

  const sequence = [start];
  let n = start;

  for (let i = 0; i < maxSteps && n !== 1; i++) {
    n = collatzStep(n);
    sequence.push(n);

    if (!Number.isSafeInteger(n)) {
      throw new Error("JavaScriptの安全な整数範囲を超えました。");
    }
  }

  return sequence;
}

export function stoppingTime(start, maxSteps = 100000) {
  const sequence = collatzSequence(start, maxSteps);
  return sequence.at(-1) === 1 ? sequence.length - 1 : null;
}

export function maximumValue(start, maxSteps = 100000) {
  return Math.max(...collatzSequence(start, maxSteps));
}

export function reachesOne(start, maxSteps = 100000) {
  const sequence = collatzSequence(start, maxSteps);
  return sequence.at(-1) === 1;
}
