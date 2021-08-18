const imagemin = require('imagemin');
const webp = require('imagemin-webp');
const path = require('path');

const images = path.join(__dirname, '../', 'src/assets/img');

module.exports = async () => {
  await imagemin(['src/images/*.{jpg,jpeg,png}'], {
    destination: images,
    plugins: [webp({ quality: 60 })],
  });
};
