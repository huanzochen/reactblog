const Controller = require('egg').Controller;

class EggController extends Controller {
    async login() {
        const { ctx } = this;
        //ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;

        const isLogin = await this.ctx.service.member.validate();
        ctx.body = isLogin;
    };
    async islogin() {
        const { ctx } = this;
        const isLogin = await this.ctx.service.member.authenticated();
        ctx.body = isLogin;
    }
    async logout() {
        const { ctx } = this;
        const isLogout = await this.ctx.service.member.logout();
        ctx.body = isLogout;
    }
    async register() {
        const { ctx } = this;
        const register = await this.ctx.service.member.register();
        ctx.body = register;
    }
}

module.exports = EggController;