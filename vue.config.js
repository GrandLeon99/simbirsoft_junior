module.exports = {
  devServer: {
    proxy: 'https://api.football-data.org/v2',
  },

  transpileDependencies: [
    'vuetify',
  ],
};
