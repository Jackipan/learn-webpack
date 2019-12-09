const path = require('path');
const rimraf = require('rimraf');
const Config = require('webpack-chain') // 更加灵活
const config = new Config();
const resolve = src => {
    return path.join(process.cwd(), src)
}


rimraf.sync('dist');


config.entry('src/index.js').add(resolve('src/index.js')).end().set('mode', process.env.NODE_ENV).output.path(resolve('dist')).filename('[name].bundle.js');

config.module.rule('css').test(/\.css$/).use('css').loader('css-loader');

module.exports = config.toConfig()