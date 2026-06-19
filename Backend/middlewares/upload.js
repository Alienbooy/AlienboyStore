const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Guarda los archivos en Backend/uploads/products
    cb(null, path.join(__dirname, '../uploads/products'));
  },
  filename: function (req, file, cb) {
    // Genera un nombre único: producto-1681234567890.jpg
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, 'producto-' + uniqueSuffix + extension);
  }
});

const fileFilter = (req, file, cb) => {
  // Aceptar solo imágenes
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Formato no válido, solo se permiten imágenes.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Límite de 5MB
});

module.exports = upload;
