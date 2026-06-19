const { Product, ProductVariant } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { is_active: true },
      include: [
        {
          model: ProductVariant,
          as: 'variants',
        },
      ],
    });

    // Format response for the frontend
    const formattedProducts = products.map((p) => {
      const productObj = p.toJSON();
      const prices = {};
      const originalPrices = {};
      const quantityLabels = {};

      productObj.variants.forEach((v) => {
        prices[v.variant_name] = parseFloat(v.price);
        if (v.original_price) {
          originalPrices[v.variant_name] = parseFloat(v.original_price);
        }
        if (v.variant_label) {
          quantityLabels[v.variant_name] = v.variant_label;
        }
      });

      return {
        id: productObj.slug,
        name: productObj.name,
        brand: productObj.brand,
        desc: productObj.description,
        category: productObj.category,
        sub_category: productObj.sub_category,
        tag: productObj.tags && productObj.tags.length > 0 ? productObj.tags[0] : '',
        tagColor: productObj.tag_color || 'var(--primary)',
        glowClass: productObj.glow_class || 'glow-card',
        priceColor: productObj.price_color || 'var(--primary)',
        prices,
        originalPrices,
        quantityLabels,
        img: productObj.image_url,
        features: productObj.features || [],
        specs: productObj.specs || [],
        badges: productObj.tags || [],
        rating: parseFloat(productObj.rating),
        reviews: productObj.reviews_count,
      };
    });

    res.json(formattedProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({
      where: { slug, is_active: true },
      include: [
        {
          model: ProductVariant,
          as: 'variants',
        },
      ],
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const productObj = product.toJSON();
    const prices = {};
    const originalPrices = {};
    const quantityLabels = {};

    productObj.variants.forEach((v) => {
      prices[v.variant_name] = parseFloat(v.price);
      if (v.original_price) {
        originalPrices[v.variant_name] = parseFloat(v.original_price);
      }
      if (v.variant_label) {
        quantityLabels[v.variant_name] = v.variant_label;
      }
    });

    const formattedProduct = {
      id: productObj.slug,
      name: productObj.name,
      brand: productObj.brand,
      desc: productObj.description,
      category: productObj.category,
      sub_category: productObj.sub_category,
      tag: productObj.tags && productObj.tags.length > 0 ? productObj.tags[0] : '',
      tagColor: productObj.tag_color || 'var(--primary)',
      glowClass: productObj.glow_class || 'glow-card',
      priceColor: productObj.price_color || 'var(--primary)',
      prices,
      originalPrices,
      quantityLabels,
      img: productObj.image_url,
      features: productObj.features || [],
      specs: productObj.specs || [],
      badges: productObj.tags || [],
      rating: parseFloat(productObj.rating),
      reviews: productObj.reviews_count,
    };

    res.json(formattedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// CREATE PRODUCT (Admin)
exports.createProduct = async (req, res) => {
  try {
    const { name, brand, category, sub_category, description, price, variant_name, slug, tags } = req.body;
    
    // Obtener la URL de la imagen subida por Multer
    let image_url = null;
    if (req.file) {
      // Guardar la ruta relativa para usar con localhost:3000/
      image_url = '/uploads/products/' + req.file.filename;
    }

    // Crear el producto principal
    const product = await Product.create({
      slug,
      name,
      brand,
      category,
      sub_category,
      description,
      image_url,
      tags: tags ? JSON.parse(tags) : [],
    });

    // Crear una variante inicial si mandó precio y variante
    if (price && variant_name) {
      await ProductVariant.create({
        product_id: product.id,
        variant_name: variant_name,
        price: parseFloat(price)
      });
    }

    res.status(201).json({ message: 'Producto creado exitosamente', product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error al crear el producto' });
  }
};

// UPDATE PRODUCT (Admin)
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (req.file) {
      updateData.image_url = '/uploads/products/' + req.file.filename;
    }

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    await product.update(updateData);
    res.json({ message: 'Producto actualizado', product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error al actualizar el producto' });
  }
};

// DELETE PRODUCT (Admin)
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    await product.destroy(); // Esto hará un CASCADE y borrará sus variantes también gracias al modelo
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error al eliminar el producto' });
  }
};
