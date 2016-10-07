import _ from 'lodash';
import Mustache from 'mustache';

import loadTemplate from '../loaders/loadTemplate';
import componentUsages from '../../consts/componentUsages';

const jsx = (children) => {
    const childs = _.values(children);
    if (childs.length === 0) {
        return null;
    }

    const mappedChildren = Object.keys(children.children).map(child => (
        { name: child, usage: children.children[child].usage }
    ));

    const getters = _.map(mappedChildren, (child) => {
        const { name, usage } = child;
        switch (usage) {
        case componentUsages.SINGLE_COMPONENT:
            const singleData = {
                componentName: '{' + name + '}',
                capitalizedComponentName: _.upperFirst(name),
            };
            const singleTemplate = loadTemplate('jsx/SINGLE_COMPONENT');
            return Mustache.render(singleTemplate, singleData);
        case componentUsages.ARRAYED_COMPONENT:
            const arrayedData = {
                componentName: '{' + name + 'Array}',
                capitalizedComponentName: _.upperFirst(name),
            };
            const arrayedTemplate = loadTemplate('jsx/ARRAYED_COMPONENT');
            return Mustache.render(arrayedTemplate, arrayedData);
        default:
            return 'default';
        }
    });

    return getters;
};

export default jsx;
