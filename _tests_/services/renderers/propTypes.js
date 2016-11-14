import { expect } from 'chai';
import _ from 'lodash';

import functionToTest from '../../../src/services/renderers/propTypes';

const singleResult = null;
const arrayedResult1 = '    listItems: React.PropTypes.arrayOf(React.PropTypes.object),\n';
const arrayedResult2 = '    users: React.PropTypes.arrayOf(React.PropTypes.object),\n';

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

        const expectedResults = [arrayedResult1];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return null and then an array called items for mixed usage', () => {
        const data = { children: {
            content: { usage: 'SINGLE_COMPONENT' },
            listItem: { usage: 'ARRAYED_COMPONENT' },
        } };
        const results = functionToTest(data);

        const expectedResults = [singleResult, arrayedResult1];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should 2 arrays, appropriately named, for 2 arrayed components', () => {
        const data = { children: {
            user: { usage: 'ARRAYED_COMPONENT' },
            listItem: { usage: 'ARRAYED_COMPONENT' },
        } };
        const results = functionToTest(data);

        const expectedResults = [arrayedResult2, arrayedResult1];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should correctly pluralize a plural format array name', () => {
        const data = { children: { users: { usage: 'ARRAYED_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [arrayedResult2];

        expect(results).to.deep.equal(expectedResults);
    });
});
