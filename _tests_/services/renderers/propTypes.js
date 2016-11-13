import { expect } from 'chai';
import _ from 'lodash';

import functionToTest from '../../../src/services/renderers/propTypes';

const singleResult = null;
const arrayedResult = '    listItems: React.PropTypes.array,\n';

describe('(instantiation)', () => {
    it('should return nothing for no children', () => {
        const data = {};
        const results = functionToTest(data);

        const expectedResults = null;

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return null for a single usage', () => {
        const data = { children: { content: { usage: 'SINGLE_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [singleResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return an array called items for an arrayed usage', () => {
        const data = { children: { listItem: { usage: 'ARRAYED_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return null and then an array called items for mixed usage', () => {
        const data = { children: {
            content: { usage: 'SINGLE_COMPONENT' },
            listItem: { usage: 'ARRAYED_COMPONENT' },
        } };
        const results = functionToTest(data);

        const expectedResults = [singleResult, arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
});
