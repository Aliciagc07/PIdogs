const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
dogsRouter = require('./dogsRouter')
temperamentsRouter = require('./temperamentsRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRouter);
router.use('/temperaments', temperamentsRouter);

module.exports = router;
