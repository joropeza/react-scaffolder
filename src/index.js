// import mkdirp from 'mkdirp';
import program from 'commander';

import renderFunctionalComponents from './services/renderFunctionalComponents';
import parseComponentTreeString from './services/parseComponentTreeString';
// import writeComponent from './services/writeComponent';

// const directory = process.cwd();

program
  .version('0.0.1')
  .option('-c, --componentTree [name]', 'Add a component [name]')
  .parse(process.argv);

const componentTreeString = program.componentTree;
const reactAst = parseComponentTreeString(componentTreeString);
const components = renderFunctionalComponents(reactAst);

console.log(components);

// const outputPath = program.outputPath || './';

// writeComponent(component, componentName, outputPath);
