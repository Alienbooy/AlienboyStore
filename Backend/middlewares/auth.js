const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Verificar si el JWT es válido
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato "Bearer <token>"

  if (!token) return res.status(401).json({ error: 'Acceso denegado: Token no proporcionado.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token inválido o expirado.' });
  }
};

// Verificar si el usuario tiene rol de 'admin'
const isAdmin = async (req, res, next) => {
  try {
    // req.user ya existe si pasó por verifyToken
    const user = await User.findByPk(req.user.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Acceso denegado: Se requieren permisos de Administrador.' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor al verificar permisos.' });
  }
};

module.exports = {
  verifyToken,
  isAdmin
};