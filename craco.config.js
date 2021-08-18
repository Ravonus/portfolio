// craco.config.js
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const imagemin = require('imagemin');
const webp = require('imagemin-webp');

const images = path.join(__dirname, 'src/assets/img');

function getConf(file, confName) {
  const yml = fs.readFileSync(path.join(__dirname, file), 'utf-8');
  const conf = YAML.parse(yml);

  const json = JSON.stringify(conf);

  fs.writeFileSync(
    path.join(__dirname, '/src/config', `${confName}.json`),
    json,
    'utf-8'
  );
}

function mapFiles(dir) {
  const confFiles = fs.readdirSync(path.join(__dirname, dir));

  confFiles.map((fileName) => {
    let name = fileName.split('.');
    if (!name[1]) return mapFiles(`${dir}/${fileName}`);
    name = name[0];

    getConf(`${dir}/${fileName}`, `${name}Configuration`);
  });
}

(async () => {
  await imagemin([`${images}/*.{jpg,jpeg,png}`], {
    destination: images,
    plugins: [webp({ quality: 60 })],
  });

  await imagemin([`${images}/team/*.{jpg,jpeg,png}`], {
    destination: `${images}/team`,
    plugins: [webp({ quality: 60 })],
  });

  await imagemin([`${images}/icons/*.{jpg,jpeg,png}`], {
    destination: `${images}/icons`,
    plugins: [webp({ quality: 60 })],
  });

  ncp(
    path.join(__dirname, '/src/assets/img/'),
    path.join(__dirname, '/public/img/')
  );

  mapFiles('/config');
})();

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
