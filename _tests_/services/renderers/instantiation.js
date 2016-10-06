import { expect } from 'chai';
import _ from 'lodash';

import functionToTest from '../../../src/services/renderers/instantiation';

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

        const expectedResults = ['const content = renderContent(); \n'];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return a single instantiation for an arrayed usage', () => {
        const data = { children: { listItem: { usage: 'ARRAYED_COMPONENT' } } };
        const results = functionToTest(data);

        const expectedResults = ['const content = renderContent(); \n'];

        expect(results).to.deep.equal(expectedResults);
    });
    it('should return only one import of lodash for multiple arrayed usages', () => {
    });
});
