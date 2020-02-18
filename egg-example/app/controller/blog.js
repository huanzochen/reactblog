const Controller = require('egg').Controller;

class EggController extends Controller {
    async getArticle() {
        const { ctx } = this;
        const blog = await this.ctx.service.blog.article();
        ctx.body = blog;
    };
}

module.exports = EggController;