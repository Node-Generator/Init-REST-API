const fs = require('fs');

const packageFile = `${process.cwd()}/package.json`;

const packageRaw = fs.readFileSync(packageFile);
const package = JSON.parse(packageRaw);

package.type = 'module';

package.scripts.lint = 'eslint ./src';
package.scripts.dev = 'node -r dotenv/config --experimental-specifier-resolution=node src/index.js';
package.scripts.start = 'node --experimental-specifier-resolution=node src/index.js';

fs.writeFileSync(packageFile, JSON.stringify(package, null, 2));
