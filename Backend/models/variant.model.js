const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const ProductVariant = sequelize.define('ProductVariant', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  variant_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  variant_label: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  original_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  sku: {
    type: DataTypes.STRING,
    unique: true,
  },
}, {
  tableName: 'product_variants',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = ProductVariant;
