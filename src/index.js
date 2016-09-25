import { read } from 'fs';
import mkdirp from 'mkdirp';
import program from 'commander';

const directory = process.cwd();

program
  .version('0.0.1')
  .option('-c, --component [name]', 'Add a component [name]')
  .parse(process.argv);

console.log('yo!', program.component);
