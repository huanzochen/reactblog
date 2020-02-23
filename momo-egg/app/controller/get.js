const Controller = require('egg').Controller;

class EggController extends Controller {
    async getInfo() {
        this.ctx.body = 'Hello Get';
        const blog = await this.ctx.service.blog.getArticleList();
        this.ctx.body = blog;
    };
}

module.exports = EggController;