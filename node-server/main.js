const Koa = require('koa');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');
const queryString = require('querystring');
const webpack = require('webpack');
const proxyConfig = require('./proxy.config');
const webpackConfig = require('./../config/webpack.config');

const app = new Koa();

const createProxySettings = (url) => {
    // TODO: 每句的作用是什么？
    return {
        target: url,
        changeOrigin: true,
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        onProxyReq: (proxyReq, req) => {
            if (req.method === 'POST' && req.body) {
                const bodyData = queryString.stringify(req.body);
                proxyReq.write(bodyData);
            }
        }

    }
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// proxyConfig.forEach(item => {
//     app.use(item.url, proxy(createProxySettings(item.target)));
// });

// const compiler = webpack(webpackConfig);


app.listen(2333);



