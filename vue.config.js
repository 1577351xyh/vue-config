const port = 7070;

module.exports = {
    // url上下文(publicPath)
    // publicPath:'www.easy-mock.com/mock/5df5016cf047c13a5dbee970',
    devServer: {
        //端口
        port,
        proxy: {
            // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
            [process.env.VUE_APP_BASE_API]: {
                target: `http://localhost:7070`,
                changeOrigin: true, // 要不要变更origin头
                pathRewrite: { // 地址重写：http://127.0.0.1:3000/user/login
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        },
    }

}

