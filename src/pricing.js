'use strict';

/** Round to 2 decimal places (cents). */
function roundCents(value) {
  return Math.round(value * 100) / 100;
}

/**
 * Apply a percentage discount to a price.
 * @param {number} price  Price before discount, e.g. 80
 * @param {number} percent  Discount percentage, e.g. 25 for 25%
 */
function applyDiscount(price, percent) {
  return roundCents(price * (1 - percent / 100));
}

/** Add sales tax at the given rate, e.g. 0.13 for 13%. */
function addTax(price, rate) {
  return roundCents(price * (1 + rate));
}

/**
 * Order total: sum of line items, minus an optional discount, plus tax.
 * @param {{ price: number, qty: number }[]} items
 */
function orderTotal(items, { discountPercent = 0, taxRate = 0 } = {}) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return addTax(applyDiscount(subtotal, discountPercent), taxRate);
}

module.exports = { roundCents, applyDiscount, addTax, orderTotal };
