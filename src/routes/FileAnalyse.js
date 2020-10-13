const express = require('express');
const fileAnalyseController = require('../controllers/fileController')

const router = express.Router();

router.post('/fileanalyse', fileAnalyseController.fileAnalyse);

module.exports = router;