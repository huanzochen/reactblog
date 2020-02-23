const Service = require('egg').Service;
const moment = require('moment');

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

    async create() {
      const { ctx } = this;
      // 新增新文章
      const result = await this.app.mysql.insert('article', { 
        id: moment().format('YYYYMMDDHHmmss'),
        act_name: ctx.request.body.article.act_name,
        title: ctx.request.body.article.title,
        content: ctx.request.body.article.content,
        create_time: this.app.mysql.literals.now,
      });
      // 新增文章成功
      return result.affectedRows > 0 ? true : false;
    }

    async update() {
      const { ctx } = this;
      // 編輯文章
      const result = await this.app.mysql.update('article', {
        title: ctx.request.body.article.title,
        content: ctx.request.body.article.content,
        edit_time: this.app.mysql.literals.now,
      }, {
        where: {
          id: ctx.request.body.article.id
        }
      });
      // 編輯文章成功
      return result.affectedRows > 0 ? true : false;
    }

    async delete() {
      const { ctx } = this;
      // 刪除文章
      const result = await this.app.mysql.delete('article', {
        id: ctx.request.body.article.id,
      });
      console.log(result);
      // 刪除文章成功
      return result.affectedRows > 0 ? true : false;
    }


}

module.exports = BlogService;