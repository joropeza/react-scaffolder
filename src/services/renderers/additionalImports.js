import _ from 'lodash';

const additionalImports = (children) => {
    const childs = _.values(children);
    if (childs.length === 0) {
        return null;
    }
};

export default additionalImports;
