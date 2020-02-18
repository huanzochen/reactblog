const Service = require('egg').Service;

class BlogService extends Service {
    async article() {
      const { ctx } = this;
      // 取所有文章列表
      if (ctx.params.username == undefined) {
        return await this.app.mysql.select('blog.article');
      }
      // 取特定用戶文章
      else {
        return await this.app.mysql.select('blog.article', { 
            where: {act_name: ctx.params.username}
        });
      }
    }
}

module.exports = BlogService;