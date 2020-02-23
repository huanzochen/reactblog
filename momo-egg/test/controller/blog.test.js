const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/blog.test.js', () => {
    // test cases
    describe('GET /', () => {
      it('文章列表', async () => {
        // 对 app 发起 `GET /` 请求
        await app.httpRequest()
          .get('/api/article')
          .expect(200) // 期望返回 status 200
          .then(response => {
            assert(response.body[0].id, 'string');
            assert(response.body[0].act_name, 'string');
            assert(response.body[0].title, 'string');
            assert(response.body[0].content, 'string');
            assert(response.body[0].edit_time, 'string');
            assert(response.body[0].create_time, 'string');
          })
      });
    });


    describe('POST /', () => {
      it('新增文章', async () => {
        // 对 app 发起 `GET /` 请求
        await app.httpRequest()
          .post('/api/article/new')
          .send({
            article:{
              act_name:'testonly',
              title:'testarticle',
              content: 'testarticlecontentcontent'
            }
          })
          .then(response => {
            assert(response, true);
          })
      });
    });



});