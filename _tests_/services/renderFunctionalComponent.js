import { expect } from 'chai';

import functionToTest from '../../src/services/renderFunctionalComponent';

describe('(render functional component)', function() {
    it('should render some stuff', function() {
        const data = {
            componentName: 'testComponent'
        };
        const results = functionToTest(data);

        expect(results).to.be.ok;
        console.log(results);
    });
});
