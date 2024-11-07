// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: ["nativewind/babel"],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            "@assets": "./ParkOver/parkover/assets", // Add your alias for assets
            "presets": ["module:metro-react-native-babel-preset"],
            "plugins": ["@babel/plugin-transform-runtime"]          
          },
        },
      ],
    ],
  };
};