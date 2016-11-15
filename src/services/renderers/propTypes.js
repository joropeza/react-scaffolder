import _ from 'lodash';
import Mustache from 'mustache';
import pluralize from 'pluralize';

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
        switch (usage) {
        case componentUsages.SINGLE_COMPONENT:
            return null;
        case componentUsages.ARRAYED_COMPONENT: {
            const arrayedData = {
                propName: `${pluralize(name, 3)}`,
                propType: 'object',
            };
            const arrayedTemplate = loadTemplate('propTypes/ARRAYED_COMPONENT');
            return Mustache.render(arrayedTemplate, arrayedData);
        }
        default:
            return 'default';
        }
    });

    return getters;
};

export default imports;
