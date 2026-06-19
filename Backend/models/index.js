const sequelize = require('../config/db.config');

const User = require('./user.model');
const Product = require('./product.model');
const ProductVariant = require('./variant.model');

// Define associations
Product.hasMany(ProductVariant, { foreignKey: 'product_id', as: 'variants' });
ProductVariant.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
  sequelize,
  User,
  Product,
  ProductVariant,
};
