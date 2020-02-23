const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello World';
    }
    async post() {
        this.ctx.body = this.ctx.request.body;
    }
}

module.exports = HomeController;