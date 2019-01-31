const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'src');
const NODE_DIR = path.join(ROOT, 'node_modules');
const BUILD_DIR = path.join(ROOT, 'dist');


exports.ROOT = ROOT;
exports.APP_DIR = APP_DIR;
exports.NODE_DIR = NODE_DIR;
exports.BUILD_DIR = BUILD_DIR;
