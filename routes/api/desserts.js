const express = require('express');
const router = express.Router();
const desserts = require('../../resources/desserts/desserts.json'); //Care cache
const { rateLimiter, slowDowner } = require('../../middleware/limitation');

// @route   GET api/desserts
// @desc    Get desserts
// @access  Public
router.get('/', [], (req, res) => {
  res.json(desserts);
});

module.exports = router;
