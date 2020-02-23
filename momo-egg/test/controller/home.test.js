const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/home.test.js', () => {
    describe('GET /', () => {
        it('should status 200 and get the body', () => {
            // 對 app 發起 `GET/` 請求
            return app.httpRequest()
                .get('/')
                .expect(200) // 期望返回 status 200
                .expect('Hello World'); // 期望 body 是 Hello World
        });

        it('should send multi requests', async() => {
            // 使用generator function 方式寫測試用例, 可以在一個用例中串行發起多次請求
            await app.httpRequest()
                .get('/')
                .expect(200) // 期望返回 status 200
                .expect('Hello World'); // 期望 body 是 hello world
            
            // 再請求一次
            const result = await app.httpRequest()
                .get('/')
                .expect(200)
                .expect('Hello World');

            // 也可以這樣驗證
            assert(result.status === 200);
        });

        
        it('should status 200 and get the request body', () => {
            // 模擬 CSRF Token. 下文會詳細說明
            app.mockCsrf();
            return app.httpRequest()
                .post('/')
                .type('form')
                .send({
                    foo: 'bar',
                })
                .expect(200)
                .expect({
                    foo: 'bar',
                });
        });
        

    });
});