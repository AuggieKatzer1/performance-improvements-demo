const cache = new Map();

function expensiveTransform(input) {
  if (cache.has(input)) {
    return cache.get(input);
  }

  let result = 0;
  for (let i = 0; i < 100000; i++) {
    result += (input.charCodeAt(i % input.length) + i) % 17;
  }

  const normalized = `${input}:${result}`;
  cache.set(input, normalized);
  return normalized;
}

module.exports = { expensiveTransform };
