const express = require('express');
const router = express.Router();
const titreController = require('../controleurs/titreController');

router.get('/titres/:type_titre', titreController.getTitres);

module.exports = router;
