const Service = require('egg').Service;
const crypto = require('crypto');

class MemberService extends Service {
    async validate() {
        const { ctx } = this;
        const memberInDB = await this.app.mysql.select('blog.member', { 
            where: {act_name: ctx.request.body.user.username},
        });

        console.log(ctx.request.body);
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

    async authenticated() {
        const { ctx } = this;
        return {
            username: ctx.user,
            status: ctx.isAuthenticated()
        }
    }

    async logout() {
        const { ctx } = this;
        ctx.logout();
        console.log('isAuthenticated_測試');
        console.log(ctx.isAuthenticated());
        if (!ctx.isAuthenticated()){
            // 登出成功
            return true
        }
        else {
            // 登出失敗
            return false
        }
    }

    async register() {
        const { ctx } = this;
        // 註冊會員
        const hash = crypto.createHash('sha256');
        hash.update((hash.update(ctx.request.body.user.password) + 'edwardsekaino.1'));

        try {
            const result = await this.app.mysql.insert('member', { 
                act_name: ctx.request.body.user.username,
                pwd: hash.digest('hex'),
                email: ctx.request.body.user.email,
                rank: 'member',
                register_date: this.app.mysql.literals.now,
            }); 
            if (result.affectedRows > 0) {
                return {
                    msg:'新增使用者成功',
                    result:true
                }
            }
            else {
                return {
                    msg:'註冊失敗!',
                    result:false
                }
            }
        } catch(result) {
            if (result.sqlState === '23000'){
                return {
                    msg:'該帳號已存在!請更換帳號名稱!',
                    result:false
                }
            }
            else {
                return {
                    msg:'註冊失敗!',
                    result:false
                }
            }
        }
         
    }
}

module.exports = MemberService;