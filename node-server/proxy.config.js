/** 
 * 配置需要代理的url和目标url
 */
const port = 8081;
const host = 'localhost'
const targetServer = `${host}:${port}`;
// 代理所有api请求
const config = [{
    url: '/api/**',
    target: targetServer
}];

module.exports = config;