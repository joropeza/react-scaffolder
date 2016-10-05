import { expect } from 'chai';
import _ from 'lodash';

import componentAsts from '../io/componentAsts';
import functionToTest from '../../src/services/parseComponentTreeString';

describe('(parse component string)', () => {
    _.forIn(componentAsts, (ast, key) => {
        it(`should create a component from ${key}`, () => {
            const data = key;
            const results = functionToTest(data);

            const expectedResults = ast;

            expect((_.values(results)).length).to.equal((_.values(expectedResults)).length);
            expect(results).to.deep.equal(expectedResults);
        });
    });
});
