const Controller = require('egg').Controller;

class EggController extends Controller {
    async login() {
        const { ctx } = this;
        //ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
        ctx.body = ctx.request.body.username;
    };
}

module.exports = EggController;