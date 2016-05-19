import * as koa from "koa";
import * as serve from 'koa-static';
import * as cache from "koa-rest-cache";
import * as path from 'path';
import siteRouter from "./server/routes/site";
import apiRouter from "./server/routes/api";

const app = new koa();

app.use(cache({
  pattern: '/api/**/*'
}));

app.use(serve(path.join(__dirname, '/assets')));

app.use(siteRouter);
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
const server = app.listen(3000, function() {
  console.log('Successfully started up');
});