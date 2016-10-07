import { expect } from 'chai';
import _ from 'lodash';

import functionToTest from '../../../src/services/renderers/imports';

const singleResult = 'import renderContent from \'./content\'; \n';
const arrayedResult = 'import renderListItem from \'./listItem\';\n';

describe('(imports)', () => {
    it('should return nothing for no children', () => {
        const data = {};
        const results = functionToTest(data);

        const expectedResults = null;

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return a single import for a single usage', () => {
        const data = { children: { content: { usage: 'SINGLE_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [singleResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return a single import for an arrayed usage', () => {
        const data = { children: { listItem: { usage: 'ARRAYED_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return multiple imports', () => {
        const data = { children: {
            content: { usage: 'SINGLE_COMPONENT' },
            listItem: { usage: 'ARRAYED_COMPONENT' },
        } };
        const results = functionToTest(data);

        const expectedResults = [singleResult, arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
});
