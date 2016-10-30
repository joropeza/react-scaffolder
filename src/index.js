// import mkdirp from 'mkdirp';
import program from 'commander';
import _ from 'lodash';

import renderFunctionalComponents from './services/renderFunctionalComponents';
import parseComponentTreeString from './services/parseComponentTreeString';
import writeComponent from './services/writeComponent';

// const directory = process.cwd();

program
  .version('0.0.1')
  .option('-c, --componentTree [name]', 'Add a component [name]')
  .option('-p, --path <path>', 'set output path. defaults to ./')
  .parse(process.argv);

const componentTreeString = program.componentTree;
const reactAst = parseComponentTreeString(componentTreeString);
const components = renderFunctionalComponents(reactAst);

console.log(components);

// const outputPath = program.outputPath || './';

const writeResults = _.reduce(components, (errors, component, componentName) => {
    const newError = writeComponent(component, componentName, program.path || './');
    if (newError) { errors.push(newError); }
    return errors;
}, []);

console.log(writeResults);
