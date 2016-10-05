import Mustache from 'mustache';
import _ from 'lodash';

import additionalImports from './renderers/additionalImports';
import loadTemplate from './loaders/loadTemplate';

const createComponentChildren = (children) => {
        console.log(children);
        // iterate the children
        // for each, switch/case off of the usage
        // tricky thing will be if we need to split the js from the jsx
        // other tricky thing will be if there are multiple children (header, body, footer model)
};

const renderFunctionalComponent = (name, componentAst) => {
    const data = _.cloneDeep(componentAst);
    data.componentName = name;

    data.childJsx = createComponentChildren(data.children);

    const template = loadTemplate('reactFunctionalComponent');
    return Mustache.render(template, data);
};

const renderFunctionalComponents = (ast) => {
    const componentCollection = [];

    _.forOwn(ast, (componentAst, key) => {
        componentCollection.push(renderFunctionalComponent(key, componentAst));
    });

    return componentCollection;
};

export default renderFunctionalComponents;

// 1. import lodash if there is at least one arrayed child being used (NIX, just array.map())
// 2. import the components themselves
// 3. instantiation for each child
// 4. jsx to render each child (order is important, must be maintained)
// 5. prop validation... how do we know what gets passed? do we pass some subset of props automatically?
// 6. default values
