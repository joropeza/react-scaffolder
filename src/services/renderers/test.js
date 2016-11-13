import _ from 'lodash';
import Mustache from 'mustache';

import loadTemplate from '../loaders/loadTemplate';
import componentUsages from '../../consts/componentUsages';

const imports = (children) => {
    const childs = _.values(children);
    if (childs.length === 0) {
        return null;
    }

    const mappedChildren = Object.keys(children.children).map(child => (
        { name: child, usage: children.children[child].usage }
    ));

    const getters = _.map(mappedChildren, (child) => {
        const { name, usage } = child;
        const singleData = {
            componentName: name,
            capitalizedComponentName: _.upperFirst(name),
        };
        const template = loadTemplate('tests/mocha.mustache');
        return Mustache.render(template, singleData);
    });

    return getters;
};

export default imports;
