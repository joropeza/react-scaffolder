import _ from 'lodash';

import componentUsages from '../../consts/componentUsages';

const instantiation = (children) => {
    const childs = _.values(children);
    if (childs.length === 0) {
        return null;
    }
    const getters = _.map(children, child => {
        switch (componentUsages) {
        case componentUsages.SINGLE_COMPONENT:
            break;
        default:
            break;
        }
    });

    return getters;
};

export default instantiation;
