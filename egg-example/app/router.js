module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.post('/', controller.home.post);
    router.get('/gettest', controller.get.getInfo)
};