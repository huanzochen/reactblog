const Service = require('egg').Service;
const crypto = require('crypto');

class MemberService extends Service {
    async validate() {
        const { ctx } = this;
        const memberInDB = await this.app.mysql.select('blog.member', { 
            where: {act_name: ctx.request.body.username},
        });
        const hash = crypto.createHash('sha256');
        hash.update((hash.update(ctx.request.body.password) + 'edwardsekaino.1'));
        
        if ( memberInDB.length > 0){
            ctx.body = hash.digest('hex') === memberInDB[0].pwd ? true : false;
        }
        else ctx.body = false

    }
}

module.exports = MemberService;