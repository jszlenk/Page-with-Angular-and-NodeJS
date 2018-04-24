var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
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

router.post('/kontakt', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'fastmail',
        auth: {
            user: 'test@fastmail.com',
            pass: 'test'
        }
    });

    var htmlContent = '<p><b>Imię i Nazwisko:</b> ' + req.body.name + '<br>' +
        '<b>Email:</b> ' + req.body.email + '<br>' +
        '<b>URL:</b> ' + req.body.url + '<br>' +
        '<b>Telefon:</b> ' + req.body.tel + '<br>' +
        '<b>Wiadomość:</b> ' + req.body.message + '</p>';

    var mailOptions = {
        to: 'test@fastmail.fm',
        subject: 'Wiadomość z formularza FireLink',
        from: req.body.name + ' <' + req.body.email + '>',
        sender: req.body.email,
        html: htmlContent
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return 'Error: ' + error;
            return res.status(404).json(info);
            res.sendStatus(404);
        } else {
            console.log('Wiadomość wysłana: ' + info.response);
            // return  res.json(201, data);
            return res.status(200).json(info);
            res.sendStatus(200);
        }
    });
});

module.exports = router;
