const asyncHandler = require("express-async-handler");
const Property = require("../message/propertyPageModal");

const propertyDetail = asyncHandler(async (req, res) => {
  const {
    propertyTitle,
    propertyImages,
    address,
    price,
    description,
    floorPlan,
  } = req.body;
  if (
    !propertyTitle ||
    !propertyImages ||
    !address ||
    !price ||
    !description ||
    !floorPlan
  ) {
    res.status(400);
    throw new Error("Please enter message!");
  }

  const property = await Property.create({
    propertyTitle,
    propertyImages,
    address,
    price,
    description,
    floorPlan,
  });
  if (property) {
    res.status(201).json({
      _id: property._id,
      propertyTitle: property.propertyTitle,
      propertyImages: property.propertyImages,
      address: property.address,
      price: property.price,
      description: property.description,
      floorPlan: property.floorPlan,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the message!");
  }
});

const getPropertyDetail = asyncHandler(async (req, res) => {
  Property.find()
    .then((result) => {
      res.status(200).json({
        property: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = { propertyDetail, getPropertyDetail };
