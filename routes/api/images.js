const express = require('express');
const router = express.Router();
const path = require('path');
const { rateLimiter, slowDowner } = require('../../middleware/limitation');

// @route   GET api/images
// @desc    Get image
// @access  Public
router.get('/:file', [slowDowner, rateLimiter], (req, res) => {
  console.log(`Sent image: ${req.params.file}`);
  const options = {
    root: path.join(__dirname, '../../resources/images'),
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    },
    maxAge: 172800000
  };
  //res.type('jpg');
  res.sendFile(`${req.params.file}`, options);
});

module.exports = router;
