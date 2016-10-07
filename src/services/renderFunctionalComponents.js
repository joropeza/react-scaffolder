import Mustache from 'mustache';
import _ from 'lodash';

// import additionalImports from './renderers/additionalImports';
import instantiation from './renderers/instantiation';
import jsx from './renderers/jsx';
import loadTemplate from './loaders/loadTemplate';

const renderFunctionalComponent = (name, componentAst) => {
    const data = _.cloneDeep(componentAst);
    data.componentName = name;

    data.instantiations = instantiation(componentAst);
    data.childJsx = jsx(componentAst);

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
