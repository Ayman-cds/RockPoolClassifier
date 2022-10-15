const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('cjs');

global.THREE = global.THREE || THREE;

module.exports = defaultConfig;
module.exports = {
    resolver: {
        assetExts: ['db', 'mp3', 'ttf', 'obj', 'png', 'jpg'],
    },
};