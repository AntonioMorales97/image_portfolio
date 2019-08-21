const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

// Limiters
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: {
    msg: 'Too many requests from same IP. Try again later!'
  }
});

const slowDowner = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 10,
  delayMs: 100
});

module.exports = {
  rateLimiter,
  slowDowner
};
