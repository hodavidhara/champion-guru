var send = require('koa-send');

function* siteRouter(next) {
    yield next;
    if (this.body) return;
    yield send(this, 'index.html')
}
module.exports = siteRouter;