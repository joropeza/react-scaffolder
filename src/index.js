// import mkdirp from 'mkdirp';
import program from 'commander';
import _ from 'lodash';

import renderFunctionalComponents from './services/renderFunctionalComponents';
import parseComponentTreeString from './services/parseComponentTreeString';
import writeComponent from './services/writeComponent';

// const directory = process.cwd();

const cleanupPath = (path) => {
    if (!path) {
        return './';
    }
    let cleanedupPath = path;
    // sourced from http://stackoverflow.com/a/11531417
    const lastChar = cleanedupPath.substr(-1); // Selects the last character
    if (lastChar !== '/') {         // If the last character is not a slash
        cleanedupPath += '/';            // Append a slash to it.
    }
    return cleanedupPath;
};

program
  .version('0.0.1')
  .option('-c, --componentTree [name]', 'Add a component [name]')
  .option('-p, --path <path>', 'set output path. defaults to ./')
  .parse(process.argv);

const componentTreeString = program.componentTree;
const reactAst = parseComponentTreeString(componentTreeString);
const components = renderFunctionalComponents(reactAst);

// const outputPath = program.outputPath || './';

const path = cleanupPath(program.path);

const writeResults = _.reduce(components, (errors, component, componentName) => {
    const newError = writeComponent(component, componentName, path);
    if (newError) { errors.push(newError); }
    return errors;
}, []);

console.log(writeResults);
