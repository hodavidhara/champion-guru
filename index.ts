import * as koa from "koa";
import siteRouter from "./server/routes/site";
import apiRouter from "./server/routes/api";
import * as webpackDevMiddleware from "koa-webpack-dev-middleware";
import * as webpack from "webpack";
import * as cache from "koa-rest-cache";
const webpackConfig = require('./webpack.config');

const app = new koa();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  }
}));

app.use(cache({
  pattern: '/api/**/*'
}));

app.use(siteRouter);
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
const server = app.listen(3000, function() {
  console.log('Successfully started up');
});