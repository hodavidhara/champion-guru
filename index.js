var koa = require('koa');
var siteRouter = require('./server/routes/site');
var apiRouter = require('./server/routes/api');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var app = koa();

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    stats: {
        colors: true
    }
}));

app.use(siteRouter);
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
var server = app.listen(3000, function() {
    console.log('Successfully started up');
});