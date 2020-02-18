const Controller = require('egg').Controller;

class EggController extends Controller {
    async validate() {
        const { ctx } = this;
        ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
    };
}

module.exports = EggController;