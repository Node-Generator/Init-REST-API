const fs = require('fs');

const packageFile = `${process.cwd()}/package.json`;

const packageRaw = fs.readFileSync(packageFile);
const pack = JSON.parse(packageRaw);

pack.type = 'module';

pack.scripts.lint = 'eslint ./src';
pack.scripts.dev = 'node -r dotenv/config --experimental-specifier-resolution=node src/index.js';
pack.scripts.start = 'node --experimental-specifier-resolution=node src/index.js';

fs.writeFileSync(packageFile, JSON.stringify(pack, null, 2));
