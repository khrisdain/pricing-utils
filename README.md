# pricing-utils

Small pricing helpers for an online store: percentage discounts, sales tax and order totals.

## Usage

```js
const { orderTotal } = require('./src/pricing');

orderTotal([{ price: 20, qty: 2 }], { discountPercent: 10, taxRate: 0.13 }); // 40.68
```

## Development

Requires Node 20 or newer. No dependencies.

```bash
npm test
```
