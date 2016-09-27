import { expect } from 'chai';

import functionToTest from '../../src/services/parseComponentTreeString';

const componentTypes = {
    SINGLE_COMPONENT: 'SINGLE_COMPONENT',
};

describe('(parse component string)', function() {
    it('should find a single component', function() {
        const data = 'myComponent';
        const results = functionToTest(data);

        expect(results.length).to.equal(1);
    });
    it('should find a two components', function() {
        const data = 'page+content';

        const expectedResults = {
            page: {
                children: {
                    content: {
                        usage: componentTypes.SINGLE_COMPONENT,
                    },
                },
            },
            content: {

            },
        };

        const results = functionToTest(data);

        expect(results.length).to.equal(2);
        expect(results).to.equal(expectedResults);
    });
});
