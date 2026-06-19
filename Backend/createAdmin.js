require('dotenv').config();
const { User, sequelize } = require('./models');
const bcrypt = require('bcrypt');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createAdmin = async () => {
  try {
    // Sincronizar base de datos por si acaso
    await sequelize.authenticate();
    console.log('Conectado a la base de datos.');

    rl.question('Ingresa el correo del Admin: ', async (email) => {
      rl.question('Ingresa la contraseña del Admin: ', async (password) => {
        
        try {
          // Verificar si ya existe
          const existing = await User.findOne({ where: { email } });
          if (existing) {
            console.log('\n❌ Ya existe un usuario con ese correo.');
            process.exit(1);
          }

          // Crear admin
          const admin = await User.create({
            email: email,
            password_hash: password, // El hook en User.model.js lo hasheará
            full_name: 'Administrador Principal',
            role: 'admin'
          });

          console.log('\n✅ ¡Usuario Administrador creado con éxito!');
          console.log(`Email: ${admin.email}`);
          console.log(`Rol: ${admin.role}`);

        } catch (err) {
          console.error('\n❌ Error al crear el administrador:', err.message);
        } finally {
          rl.close();
          process.exit(0);
        }
      });
    });

  } catch (err) {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1);
  }
};

createAdmin();
