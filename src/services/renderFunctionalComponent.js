import { readFileSync } from 'fs';
import Mustache from 'mustache';

const loadTemplate = template =>
    readFileSync(`src/templates/${template}.mustache`).toString();

const renderFunctionalComponent = (data) => {
    const template = loadTemplate('reactFunctionalComponent');
    return Mustache.render(template, data);
};

export default renderFunctionalComponent;
