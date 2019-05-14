
module.exports = {
    development: (config) => {
        compiler_public_path : `http://${config.server_host}:${config.server_port}/`
    },
    // TODO, 这段生产环境的代码作用还不清楚，后期可能删除
    production : (config) => ({
        compiler_base_route      : '/apps/',
        compiler_public_path     : '/static/',
        compiler_fail_on_warning : false,
        compiler_hash_type       : 'chunkhash',
        compiler_devtool         : false,
        compiler_stats           : {
          chunks       : true,
          chunkModules : true,
          colors       : true
        }
      })
}