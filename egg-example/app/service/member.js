const Service = require('egg').Service;
const crypto = require('crypto');

class MemberService extends Service {
    async validate() {
        const { ctx } = this;
        const memberInDB = await this.app.mysql.select('blog.member', { 
            where: {act_name: ctx.request.body.user.username},
        });
        const hash = crypto.createHash('sha256');
        hash.update((hash.update(ctx.request.body.user.password) + 'edwardsekaino.1'));
        

        if ( memberInDB.length > 0){
            console.log(memberInDB);
            console.log('login');
            ctx.login(memberInDB[0].act_name);
            console.log('currentuser');
            console.log(ctx.user);
            console.log('isAuthenticated_測試');
            console.log(ctx.isAuthenticated());

            return hash.digest('hex') === memberInDB[0].pwd ? true : false;

        }
        else return false

    }
}

module.exports = MemberService;