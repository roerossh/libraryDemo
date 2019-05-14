const path = require('path');

exports.resolve = (pathName) => {
    return path.resolve(__dirname, './../', pathName);
}