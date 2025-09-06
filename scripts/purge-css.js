const { writeFileSync, mkdirSync } = require('fs');
const path = require('path');
const { PurgeCSS } = require('purgecss');
const sass = require('sass');
const csso = require('csso');

(async () => {
  const scssPath = path.join(__dirname, '..', 'scss', 'main.scss');
  const compiled = sass.renderSync({ file: scssPath, outputStyle: 'expanded' }).css.toString();

  const purgeResult = await new PurgeCSS().purge({
    content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
    css: [{ raw: compiled }],
    safelist: { standard: [] },
    rejected: true,
  });

  const purged = purgeResult[0].css;
  const rejected = purgeResult[0].rejected || [];

  const minified = csso.minify(purged).css;
  const outDir = path.join(__dirname, '..', 'public', 'css');
  mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'main.min.css');
  writeFileSync(outPath, minified);

  console.log(`Purged CSS written to ${outPath}`);
  if (rejected.length) {
    console.log(`Removed ${rejected.length} selectors:`);
    console.log(rejected.slice(0, 20).join(', '));
  } else {
    console.log('No selectors were removed.');
  }
})();
