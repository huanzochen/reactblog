const Controller = require('egg').Controller;

class EggController extends Controller {
    async getArticle() {
        const { ctx } = this;
        const blog = await this.ctx.service.blog.article();
        ctx.body = blog;
    };

    async newArticle() {
        const { ctx } = this;
        const isCreate = await this.ctx.service.blog.create();
        ctx.body = isCreate;
    }

    async editArticle() {
        const { ctx } = this;
        const isEdit = await this.ctx.service.blog.update();
        ctx.body = isEdit;
    }

    async deleteArticle() {
        const { ctx } = this;
        const isDelete = await this.ctx.service.blog.delete();
        ctx.body = isDelete;
    }
}

module.exports = EggController;