// Importing necessary modules
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET route for retrieving all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product], 
    // Include associated Products
  })
    .then((categories) => res.json(categories)) 
    // Return categories as JSON response
    .catch((err) => res.status(500).json(err)); 
    // Handle error if any
});

// GET route for retrieving a specific category by ID
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id, 
      // Find category with matching ID
    },
    include: [Product], 
    // Include associated Products
  })
    .then((category) => res.json(category)) 
    // Return category as JSON response
    .catch((err) => res.status(400).json(err)); 
    // Handle error if any
});

// POST route for creating a new category
router.post('/', (req, res) => {
  Category.create(req.body) 
  // Create a new category with the request body data
    .then((category) => res.status(200).json(category)) 
    // Return the created category as JSON response
    .catch((err) => res.status(400).json(err)); 
    // Handle error if any
});

// PUT route for updating an existing category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id, 
      // Find category with matching ID
    },
  })
    .then((category) => res.status(200).json(category)) 
    // Return the updated category as JSON response
    .catch((err) => res.status(400).json(err)); 
    // Handle error if any
});

// DELETE route for deleting a category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id, 
      // Find category with matching ID
    },
  })
    .then((category) => res.status(200).json(category)) 
    // Return the deleted category as JSON response
    .catch((err) => res.status(400).json(err)); 
    // Handle error if any
});

// Export the router instance
module.exports = router;
