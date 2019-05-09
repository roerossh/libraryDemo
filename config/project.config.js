import { resolve } from "./utils";
import { isParameter } from "typescript";

const config = {
    env: process.env.NODE_ENV || 'development',
    path_base: resolve(''),
    dir_client: 'web-client',
    dir_dist   : 'dist',
    dir_public : 'public',
    dir_server : 'server',

    server_host: ip.address(), // TODO: ???
    server_port: process.env.PORT || 2333,

    compiler_devtool         : 'source-map',
    compiler_hash_type       : 'hash',
    compiler_fail_on_warning : false,
    compiler_quiet           : false,
    compiler_public_path     : '/',
    compiler_stats           : {
        chunks : false,
        chunkModules : false,
        colors : true
  }
}

// 在此通过读取环境变量读取environments中对应的配置项，对前面的配置项进行覆盖
const environments = require('./environments.config')
const overrides = environments[config.env]
if (overrides) {
  debug('Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))
} else {
  debug('No environment overrides found, defaults will be used.')
}

module.exports = config;
