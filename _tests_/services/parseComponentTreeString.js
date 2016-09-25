import { expect } from 'chai';

import functionToTest from '../../src/services/parseComponentTreeString';

describe('(parse component string)', function() {
    it('should find a single component', function() {
        const data = 'myComponent';
        const results = functionToTest(data);

        expect(results.length).to.equal(1);
    });
});
