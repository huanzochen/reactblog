const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/blog.test.js', () => {
    // test cases
    describe('GET /', () => {
        it('should status 200 and get the body', () => {
          // 对 app 发起 `GET /` 请求
          return app.httpRequest()
            .get('/api/article')
            .expect(200) // 期望返回 status 200
        });
      });



});