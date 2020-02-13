const Controller = require('egg').Controller;

class EggController extends Controller {
    async getInfo() {
        this.ctx.body = 'Hello Get';
    };
}

module.exports = EggController;