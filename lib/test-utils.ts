import { formatCurrency } from './utils';

const tests = [
  { value: 10, currency: 'USD', expected: '$10.00' },
  { value: 10.5, currency: 'USD', expected: '$10.50' },
  { value: '25.99', currency: 'USD', expected: '$25.99' },
  { value: 1234.567, currency: 'USD', expected: '$1,234.57' },
  { value: 10, currency: 'EUR', expected: '€10.00' }, // Intl.NumberFormat might differ by environment, but en-US for EUR usually shows € symbol
  { value: 'abc', currency: 'USD', expected: '$0.00' }, // Fallback case
  { value: undefined, currency: 'USD', expected: '$0.00' }, // Fallback case
];

console.log('Running tests...');
tests.forEach(({ value, currency, expected }, index) => {
  try {
    const result = formatCurrency(value as any, currency);
    console.log(`Test ${index + 1}: value=${value}, currency=${currency} => result=${result} (expected: ${expected})`);
  } catch (err) {
    console.error(`Test ${index + 1} crashed:`, err);
  }
});
