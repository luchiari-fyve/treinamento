module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@animations': './src/components/animations',
          '@components': './src/components/commons',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@contexts': './src/contexts',
          '@configs': './src/configs',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@api': './src/api',
          '@routes': './src/routes',
          '@global': './src/global'
        }
      }
    ]
  ]
}
