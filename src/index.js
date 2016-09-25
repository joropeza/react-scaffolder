// import mkdirp from 'mkdirp';
import program from 'commander';

import renderFunctionalComponent from './services/renderFunctionalComponent';
import writeComponent from './services/writeComponent';

// const directory = process.cwd();

program
  .version('0.0.1')
  .option('-c, --component [name]', 'Add a component [name]')
  .parse(process.argv);

const componentName = program.component;
const component = renderFunctionalComponent({ componentName: program.component });
const outputPath = program.outputPath || './';

writeComponent(component, componentName, outputPath);
