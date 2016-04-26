import send from "koa-send";

function* siteRouter(next) {
    yield next;
    if (this.body) return;
    yield send(this, 'index.html')
}
export default siteRouter;