import _ from 'lodash';
import Mustache from 'mustache';

import loadTemplate from '../loaders/loadTemplate';
import componentUsages from '../../consts/componentUsages';

const instantiation = (children) => {
    const childs = _.values(children);
    if (childs.length === 0) {
        return null;
    }

    const getters = _.map(children, child => {
        const name = Object.keys(child)[0];
        const usage = _.values(child)[0].usage

        switch (usage) {
        case componentUsages.SINGLE_COMPONENT:
            const singleData = {
                componentName: name,
                capitalizedComponentName: _.capitalize(name),
            };
            const singleTemplate = loadTemplate('instantiation/SINGLE_COMPONENT');
            return Mustache.render(singleTemplate, singleData);
        case componentUsages.ARRAYED_COMPONENT:
            const arrayedData = {
                componentName: name,
                capitalizedComponentName: _.capitalize(name),
            };
            const arrayedTemplate = loadTemplate('instantiation/ARRAYED_COMPONENT');
            return Mustache.render(arrayedTemplate, arrayedData);
        default:
            return 'default';
        }
    });

    return getters;
};

export default instantiation;
