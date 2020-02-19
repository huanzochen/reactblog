const Service = require('egg').Service;

class MemberService extends Service {
    async validate() {
        const { ctx } = this;
        this.app.mysql.select('blog.member', { 
            where: {act_name: ctx.request.body.username},
        });
        // 待寫.......
    }
}

module.exports = MemberService;