'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { applyDiscount, addTax, orderTotal } = require('../src/pricing');

test('applies a 25% discount', () => {
  assert.equal(applyDiscount(80, 25), 60);
});

test('a 0% discount leaves the price unchanged', () => {
  assert.equal(applyDiscount(19.99, 0), 19.99);
});

test('adds 13% tax and rounds to cents', () => {
  assert.equal(addTax(10, 0.13), 11.3);
});

test('order total applies discount before tax', () => {
  const items = [
    { price: 20, qty: 2 },
    { price: 10, qty: 1 },
  ];
  assert.equal(orderTotal(items, { discountPercent: 10, taxRate: 0.13 }), 50.85);
});

//add some test
test('rejects a discount above 100%', () => {
  assert.throws(() => applyDiscount(50, 150), RangeError);
});

test('rejects a negative discount', () => {
  asserts.throws(() => applyDiscount(50, -10), RangeError);
});
