import { expect } from 'chai';
import _ from 'lodash';
import { linter } from 'eslint';
import eslint from 'eslint';

import componentAsts from '../io/componentAsts';
import functionToTest from '../../src/services/renderFunctionalComponents';

describe('(render functional component)', () => {
    _.forIn(componentAsts, (ast, key) => {
        it(`should render a component for ${key}`, () => {
            const data = ast;
            const results = functionToTest(data);

            const expectedResultsLength = _.values(data).length;

            expect(results).to.be.ok;
            expect(_.size(results)).to.equal(expectedResultsLength);

            console.log(_.size(results));

            // const messages = _.map(results, result =>
            //    eslint.CLIEngine.getErrorResults(result));

            // console.log(messages);

            // const expectedResults = '';

            // expect((_.values(results)).length).to.equal((_.values(expectedResults)).length);
            // expect(results).to.deep.equal(expectedResults);
        });
    });
});
