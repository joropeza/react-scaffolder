import { readFileSync } from 'fs';

const loadTemplate = template =>
    readFileSync(`src/templates/${template}.mustache`).toString();

export default loadTemplate;
