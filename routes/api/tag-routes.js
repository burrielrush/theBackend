const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// THE 'API/TAGS' ENDPOINT

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      { model: Product, through: ProductTag,
      },
    ],
  })
  .then((tags) => 
  res.json(tags))
  .catch((err) => 
  res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
  .then((tags) => 
  res.status(200).json(tags))
  .catch((err) => 
  res.status(404).json(err));
});


router.post('/', async (req, res) => {
  try {
    // EXTRACT THE TAG DATA FROM THE REQUEST BODY 
    const { tagName, productId } = req.body;
    // CREATE A NEW TAG
    const newTag = await Tag.create({
      tag_name: tagName,
      // ASSUMING PRODUCTID IS A PROVIDED IN THE REQUEST BODY TO ASSOCIATE THE TAG WITH A PRODUCT 
      ProductId: productId,
    });

    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const { tagName } = req.body;

    // UPDATE THE TAGS NAME
    const updatedTag = await Tag.update(
      { tag_name: tagName },
      { where: { id: tagId } }
    );

    if (updatedTag[0] === 0) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;

    // DELETE THE TAG
    const deletedTag = await Tag.destroy({
      where: { id: tagId },
    });

    if (deletedTag === 0) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
