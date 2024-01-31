module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

//essa biblioteca faz o transpilador - faz a conversao do codigo nativo para a aplicação 

