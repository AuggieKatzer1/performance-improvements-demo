const cache = new Map();
const MAX_CACHE_SIZE = 128;

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

  if (cache.size > MAX_CACHE_SIZE) {
    const oldestKey = cache.keys().next().value;
    if (oldestKey !== undefined) cache.delete(oldestKey);
  }

  return normalized;
}

function benchmark() {
  const samples = ['alpha', 'beta', 'alpha', 'gamma', 'beta'];
  const start = Date.now();
  for (const sample of samples) {
    expensiveTransform(sample);
  }
  return Date.now() - start;
}

module.exports = { expensiveTransform, benchmark };
