-- Extensión para IDs únicos
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de Usuarios
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tipos para el catálogo
CREATE TYPE product_category AS ENUM ('Skates', 'Mouse', 'Switches', 'Accesorios');
CREATE TYPE switch_type AS ENUM ('Mouse', 'Teclado Magnético', 'Teclado Mecánico', 'N/A');

-- Tabla de Productos
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  category product_category NOT NULL,
  sub_category switch_type DEFAULT 'N/A',
  description TEXT,
  features JSONB, -- Espera un array: [{icon: '', title: '', description: ''}]
  specs JSONB, -- Espera un array: [{label: '', value: ''}]
  image_url TEXT,
  tags TEXT[], -- Array de strings: ['Speed', 'Control']
  tag_color VARCHAR(50),
  glow_class VARCHAR(50),
  price_color VARCHAR(50),
  rating NUMERIC(3,2) DEFAULT 5.00,
  reviews_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Variantes de productos (Cantidades, Tamaños, Colores)
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  variant_name VARCHAR(100) NOT NULL, -- Ej: '20 Pcs', 'Negro', '40 Pcs'
  variant_label VARCHAR(100), -- Ej: 'Solo para un mouse', 'Suficiente para 2 mouses'
  price NUMERIC(10,2) NOT NULL,
  original_price NUMERIC(10,2),
  stock_quantity INTEGER DEFAULT 0,
  sku VARCHAR(100) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(product_id, variant_name)
);

-- Insertar Datos Iniciales (Seed) basados en los productos existentes de X-Raypad

-- 1. Jade Air
INSERT INTO products (id, slug, name, brand, category, sub_category, description, features, specs, image_url, tags, tag_color, glow_class, price_color, rating, reviews_count)
VALUES (
  '11111111-1111-1111-1111-111111111111', 'jade-air', 'Jade Air Dots', 'X-Raypad', 'Skates', 'N/A',
  'PTFE de Alta Gama. Microcontrol y máxima performance. Diseñados para brindar un deslizamiento rápido y preciso con menor fricción.',
  '[{"title":"Micro Control","description":"Deslizamiento ultra rápido con capacidad de frenado exacto.","icon":"speed"},{"title":"Alta Durabilidad","description":"Material PTFE premium resistente al desgaste continuo.","icon":"shield"},{"title":"Silenciosos","description":"Reducen la fricción y el ruido en movimientos bruscos.","icon":"volume_off"}]',
  '[{"label":"Material","value":"100% PTFE"},{"label":"Grosor","value":"0.8mm"},{"label":"Bordes","value":"Redondeados 2.5D"},{"label":"Compatibilidad","value":"Universal"}]',
  '/src/assets/images/Productos/x-raypad/JadeAir.jpeg',
  '{"Speed / Control"}', 'var(--neon-green)', 'glow-card', 'var(--primary-container)', 4.8, 124
);
INSERT INTO product_variants (product_id, variant_name, variant_label, price, original_price, stock_quantity)
VALUES 
  ('11111111-1111-1111-1111-111111111111', '20 Pcs', 'Para 1 mouse', 105.00, 125.00, 50),
  ('11111111-1111-1111-1111-111111111111', '40 Pcs', 'Para 2 mouses', 180.00, 210.00, 30);

-- 2. Obsidian Dots
INSERT INTO products (id, slug, name, brand, category, sub_category, description, features, specs, image_url, tags, tag_color, glow_class, price_color, rating, reviews_count)
VALUES (
  '22222222-2222-2222-2222-222222222222', 'obsidian', 'Obsidian Dots', 'X-Raypad', 'Skates', 'N/A',
  'PTFE Endurecido. Durabilidad extrema y control absoluto. Ideales para juegos tácticos donde la precisión al detenerse es vital.',
  '[{"title":"Máximo Control","description":"Fricción optimizada para frenados en seco perfectos.","icon":"my_location"},{"title":"PTFE Endurecido","description":"Mayor densidad para resistir pads rugosos o de vidrio.","icon":"hardware"},{"title":"Estabilidad","description":"Mantiene un deslizamiento consistente a largo plazo.","icon":"balance"}]',
  '[{"label":"Material","value":"PTFE Endurecido"},{"label":"Grosor","value":"0.8mm"},{"label":"Perfil","value":"Control"},{"label":"Superficie ideal","value":"Vidrio / Híbrida"}]',
  '/src/assets/images/Productos/x-raypad/Obsidian.jpeg',
  '{"Control"}', 'var(--neon-red)', 'glow-card-red', 'var(--neon-red)', 4.9, 89
);
INSERT INTO product_variants (product_id, variant_name, variant_label, price, original_price, stock_quantity)
VALUES 
  ('22222222-2222-2222-2222-222222222222', '20 Pcs', 'Para 1 mouse', 105.00, 125.00, 40),
  ('22222222-2222-2222-2222-222222222222', '40 Pcs', 'Para 2 mouses', 180.00, 210.00, 20);

-- 3. Obsidian Air Dots
INSERT INTO products (id, slug, name, brand, category, sub_category, description, features, specs, image_url, tags, tag_color, glow_class, price_color, rating, reviews_count)
VALUES (
  '33333333-3333-3333-3333-333333333333', 'obsidian-air', 'Obsidian Air Dots', 'X-Raypad', 'Skates', 'N/A',
  'Deslizamiento ultra suave con control mejorado. Menos ruido. Combina la suavidad de la línea Air con el control del Obsidian.',
  '[{"title":"Smooth Glide","description":"Sensación de flotación sobre el pad sin perder control.","icon":"air"},{"title":"Reducción de Ruido","description":"Diseño acústico para un tracking silencioso.","icon":"volume_down"},{"title":"Control Dinámico","description":"Responde a la presión de tu mano.","icon":"tune"}]',
  '[{"label":"Material","value":"PTFE Híbrido"},{"label":"Grosor","value":"0.8mm"},{"label":"Deslizamiento","value":"Suave/Controlado"},{"label":"Compatibilidad","value":"Universal"}]',
  '/src/assets/images/Productos/x-raypad/ObsidianAir.jpeg',
  '{"Control / Smooth"}', 'var(--neon-purple)', 'glow-card-purple', 'var(--neon-purple)', 4.7, 56
);
INSERT INTO product_variants (product_id, variant_name, variant_label, price, original_price, stock_quantity)
VALUES 
  ('33333333-3333-3333-3333-333333333333', '20 Pcs', 'Para 1 mouse', 105.00, 125.00, 35),
  ('33333333-3333-3333-3333-333333333333', '40 Pcs', 'Para 2 mouses', 180.00, 210.00, 25);
