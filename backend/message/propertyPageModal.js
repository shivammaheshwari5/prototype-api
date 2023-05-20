const mongoose = require("mongoose");

const propertyPageModal = mongoose.Schema(
  {
    propertyTitle: { type: String, trim: true },
    propertyImages: { type: String, trim: true },
    address: { type: String, trim: true },
    price: { type: Number, trim: true },
    description: { type: String, trim: true },
    floorPlan: [{ type: String, trim: true }],
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertyPageModal);
module.exports = Property;
