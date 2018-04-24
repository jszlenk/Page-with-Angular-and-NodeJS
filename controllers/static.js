var express = require('express');
var router = express.Router();
var app = express();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../public'));
router.use('/templates', express.static(__dirname + '/../templates'));
router.use('/style', express.static(__dirname + '/../style'));

router.get('*', function (req, res) {
    res.render('app.html.ejs')
});

app.get("/manifest", function (req, res) {
    res.header("Content-Type", "text/cache-manifest");
    res.end("CACHE MANIFEST");
});

module.exports = router;
