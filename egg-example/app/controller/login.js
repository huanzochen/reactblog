const Controller = require('egg').Controller;

class EggController extends Controller {
    async login() {
        const { ctx } = this;
        //ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;

        const islogin = await this.ctx.service.member.validate();
    };
    async islogin() {
        const { ctx } = this;
        const islogin = await this.ctx.service.member.validate();
    }
}

module.exports = EggController;