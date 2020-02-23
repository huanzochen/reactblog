module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.post('/', controller.home.post);
    router.get('/gettest', controller.get.getInfo);
    
    
    // 取得文章列表
    router.get('/api/article', controller.blog.getArticle);
    router.get('/api/article/:username', controller.blog.getArticle)

    // 驗證登入
    router.post('/api/login/login', controller.login.login)
    router.get('/api/login/islogin', controller.login.islogin)
    // 登出
    router.get('/api/login/logout', controller.login.logout)

    // 新增/編輯 文章
    router.post('/api/article/new', controller.blog.newArticle)
    router.post('/api/article/edit', controller.blog.editArticle)
    router.post('/api/article/delete', controller.blog.deleteArticle)
};