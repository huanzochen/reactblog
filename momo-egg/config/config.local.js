// only read at development mode, will override default
exports.keys = 'yay' ;
// 添加 view配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

// add middleware robot
exports.middleware = [
    'robot'
];

// robot's configurations
exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ],
};

// 添加 mysql 配置
exports.mysql = {
    // 單數據庫信息配置
    client: {
        // host 
        host: 'momoweb.hopto.me',
        // 端口號
        port: '3306',
        // 用户名
        user: 'api',
        // 密码
        password: 'CHG_challenge112',
        // 数据库名
        database: 'blog',
    },
    // 是否加載到app 上, 默認開啟
    app: true,
    // 是否加載到agent 上, 默認關閉
    agent: false,
}

