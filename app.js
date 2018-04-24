var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cacheManifest = require('connect-cache-manifest');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cacheManifest({
    manifestPath: '/cache.manifest',
    cdn: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js'],
    cdn: ['https://cdn.jsdelivr.net/foundation/6.2.1/foundation.min.js'],
    cdn: ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.js'],
    cdn: ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-animate.js'],
    cdn: ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular-route.js'],
    cdn: ['https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.3.3/ui-bootstrap-tpls.min.js'],
    files: [{
        file: __dirname + '/style/images/A17.jpg',
        path: '/images/A17.jpg'
    }, {
        file: __dirname + '/style/images/wd.svg',
        path: '/images/wd.svg'
    }, {
        file: __dirname + '/style/images/gwarancja10.svg',
        path: '/images/gwarancja10.svg'
    }, {
        file: __dirname + '/style/images/gwarancja10.svg',
        path: '/images/gwarancja10.svg'
    }, {
        file: __dirname + '/style/images/A25.jpg',
        path: '/images/A25.jpg'
    }, {
        file: __dirname + '/style/images/A12.jpg',
        path: '/images/A12.jpg'
    }, {
        file: __dirname + '/style/images/A14.jpg',
        path: '/images/A14.jpg'
    }, {
        file: __dirname + '/style/images/A15.jpg',
        path: '/images/A15.jpg'
    }, {
        file: __dirname + '/style/images/A24.jpg',
        path: '/images/A24.jpg'
    }, {
        file: __dirname + '/style/images/A30.jpg',
        path: '/images/A30.jpg'
    }, {
        file: __dirname + '/style/images/wds.svg',
        path: '/images/wds.svg'
    }, {
        file: __dirname + '/style/fonty/roboto_medium/Roboto-Medium-webfont.woff',
        path: '/fonty/roboto_medium/Roboto-Medium-webfont.woff'
    }, {
        file: __dirname + '/style/fonty/roboto_black/Roboto-Black-webfont.woff',
        path: '/fonty/roboto_black/Roboto-Black-webfont.woff'
    }, {
        file: __dirname + '/style/fonty/roboto_bolditalic/Roboto-BoldItalic-webfont.woff',
        path: '/fonty/roboto_bolditalic/Roboto-BoldItalic-webfont.woff'
    }, {
        file: __dirname + '/style/fonty/roboto_italic/Roboto-Italic-webfont.woff',
        path: '/fonty/roboto_italic/Roboto-Italic-webfont.woff'
    }, {
        dir: __dirname + '/style/css',
        prefix: '/css/'
    }],
    networks: ['*'],
    fallbacks: []
}));

app.use(favicon(path.join(__dirname, '/style/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(require('./controllers'));

var server = app.listen(3000, function () {
    console.log('Server is permanently running on %d', server.address().port)
});
