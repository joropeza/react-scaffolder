import { expect } from 'chai';
import _ from 'lodash';

import functionToTest from '../../../src/services/renderers/instantiation';

const singleResult = '    const content = renderContent();\n';
const arrayedResult = '    const listItemArray = props.listItems.map((item) => {\n        // provide required transforms here\n        \n        return renderListItem();\n    });\n';

describe('(instantiation)', () => {
    it('should return nothing for no children', () => {
        const data = {};
        const results = functionToTest(data);

        const expectedResults = null;

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return a single instantiation for a single usage', () => {
        const data = { children: { content: { usage: 'SINGLE_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [singleResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return a single instantiation for an arrayed usage', () => {
        const data = { children: { listItem: { usage: 'ARRAYED_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return multiple instantiations', () => {
        const data = { children: {
            content: { usage: 'SINGLE_COMPONENT' },
            listItem: { usage: 'ARRAYED_COMPONENT' },
        } };
        const results = functionToTest(data);

        const expectedResults = [singleResult, arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
});
