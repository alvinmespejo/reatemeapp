var express     = require('express');
var router      = express.Router();
var company     = require('../controllers/company.controller.js');
var passport    = require('passport');

router.get('/create', company.getCompanyCreate);

router.get('/list', company.getCompanyList);
router.get('/search', company.getSearch);
router.get('/leaderBoard', company.getLeaderBoard);

module.exports = router;