import { expect } from 'chai';

import functionToTest from '../../../src/services/renderers/test';

const expectedResult = 'import { expect } from \'chai\n\'' +
                    '\n' +
                    'describe(\'(jsx)\', function () {\n' +
                    '   it(\'renders\'), function () {\n}' +
                    '   });\n' +
                    '});\n';

describe('(jsx)', () => {
    it('returns a valid test', () => {
        const data = {};
        const results = functionToTest(data);

        const expectedResults = expectedResult;

        expect(results).to.deep.equal(expectedResults);
    });
});
