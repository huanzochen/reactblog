// test/app/middleware/robot.test.js
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
    it('should block robot', () => {
        return app.httpRequest()
        .get('/')
        .set('User-Agent', 'Baiduspider')
        .expect(403);
    });
});
describe('egg test', () => {
    before(() => console.log('order 1'));
    before(() => console.log('order 2'));
    after(() => console.log('order 6'));
    beforeEach(() => console.log('order 3'));
    afterEach(() => console.log('order 5'));
    it('報數', () => console.log('order 4'));
});