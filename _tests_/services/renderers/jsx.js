import { expect } from 'chai';
import _ from 'lodash';

import functionToTest from '../../../src/services/renderers/jsx';

const singleResult = '            <div>\n                {content}\n            </div>\n';
const arrayedResult = '            <div>\n                {listItemArray}\n            </div>\n';

describe('(jsx)', () => {
    it('should return nothing for no children', () => {
        const data = {};
        const results = functionToTest(data);

        const expectedResults = null;

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return a single jsx instance for a single usage', () => {
        const data = { children: { content: { usage: 'SINGLE_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [singleResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return a single jsx instance for an arrayed usage', () => {
        const data = { children: { listItem: { usage: 'ARRAYED_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = [arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return multiple jsx instances', () => {
        const data = { children: {
            content: { usage: 'SINGLE_COMPONENT' },
            listItem: { usage: 'ARRAYED_COMPONENT' },
        } };
        const results = functionToTest(data);

        const expectedResults = [singleResult, arrayedResult];

        expect(results).to.deep.equal(expectedResults);
    });
});
