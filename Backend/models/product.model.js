const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('Skates', 'Mouse', 'Switches', 'Accesorios'),
    allowNull: false,
  },
  sub_category: {
    type: DataTypes.ENUM('Mouse', 'Teclado Magnético', 'Teclado Mecánico', 'N/A'),
    defaultValue: 'N/A',
  },
  description: {
    type: DataTypes.TEXT,
  },
  features: {
    type: DataTypes.JSONB,
  },
  specs: {
    type: DataTypes.JSONB,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  tag_color: {
    type: DataTypes.STRING,
  },
  glow_class: {
    type: DataTypes.STRING,
  },
  price_color: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 5.00,
  },
  reviews_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'products',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Product;
