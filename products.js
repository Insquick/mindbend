const express = require('express');
const router = express.Router(); // Use the router, not app directly
const Product = require('./Product'); // Assuming you have a Product model

// Example route logic
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; // Export the router
