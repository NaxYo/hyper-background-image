const parse = require('parse-color');
const DEFAULT_COLOR = 'rgba(0, 0, 0, .6)';
const DEFAULT_OPACITY = .6;

function getCSS(config) {
  var file = getRandomFile(config.backgroundImage.folder);
  var color = DEFAULT_COLOR;
  var color = getBackgroundColor(
    config.backgroundColor,
    config.backgroundImage.colorOpacity
  );

  return `
    ${config.css || ''}
    .terms_terms {
      background: url(file://${file}) center;
      background-size: cover;
    }
    .terms_termGroup {
      background: ${color} !important
    }
  `;
}

function getRandomFile(dir) {
  var files = require('fs')
    .readdirSync(dir)
    .filter(name => name.match(/[.jpg|.png|.gif]$/i));

  var i = Math.floor(Math.random() * files.length);
  return dir + '/' + files[i];
}


function getBackgroundColor(color, opacity = DEFAULT_OPACITY) {
  if (!color) return DEFAULT_COLOR;
  var { rgb } = parse(color);
  return rgb ? `rgba(${rgb.join(', ')}, ${opacity})` : color;
}

module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: getCSS(config)
  });
}
