const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET all tags
router.get("/", (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tags) => res.json(tags)) 
    // Return all tags as JSON response
    .catch((err) => res.status(500).json(err)); 
    // Handle and return any error as a 500 status response
});

// GET a single tag by ID
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id, 
      // Retrieve tag by the provided ID in the request parameters
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tags) => res.status(200).json(tags)) 
    // Return the retrieved tag as JSON response with a 200 status
    .catch((err) => res.status(404).json(err)); 
    // Handle and return any error as a 404 status response
});

// CREATE a new tag
router.post("/", (req, res) => {
  Tag.create(req.body) 
  // Create a new tag using the request body data
    .then((tags) => res.status(200).json(tags)) 
    // Return the created tag as JSON response with a 200 status
    .catch((err) => res.status(404).json(err)); 
    // Handle and return any error as a 404 status response
});

// UPDATE a tag by ID
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id, 
      // Find and update the tag with the provided ID in the request parameters
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tag) => res.status(200).json(tag)) 
    // Return the updated tag as JSON response with a 200 status
    .catch((err) => res.status(404).json(err)); 
    // Handle and return any error as a 404 status response
});

// DELETE a tag by ID
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id, 
      // Delete the tag with the provided ID in the request parameters
    },
  })
    .then((tag) => res.status(200).json(tag)) 
    // Return the deleted tag as JSON response with a 200 status
    .catch((err) => res.status(404).json(err)); 
    // Handle and return any error as a 404 status response
});

module.exports = router;
