const { expensiveTransform, benchmark } = require('./performance');

console.log('alpha ->', expensiveTransform('alpha'));
console.log('alpha ->', expensiveTransform('alpha'));
console.log('beta ->', expensiveTransform('beta'));
console.log('benchmarkMs ->', benchmark());
