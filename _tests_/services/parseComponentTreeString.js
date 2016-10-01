import { expect } from 'chai';
import _ from 'lodash';

import functionToTest from '../../src/services/parseComponentTreeString';

const componentUsages = {
    SINGLE_COMPONENT: 'SINGLE_COMPONENT',
    ARRAYED_COMPONENT: 'ARRAYED_COMPONENT',
};

describe('(parse component string)', function() {
    it('should find a single component', function() {
        const data = 'myComponent';
        const results = functionToTest(data);

        const expectedResults = {
            myComponent: {
                children: {},
            },
        };

        expect((_.values(results)).length).to.equal((_.values(expectedResults)).length);
        expect(results).to.deep.equal(expectedResults);
    });
    it('should create a toplevel component with three subs', function() {
        const data = 'body+(header,[listItem],footer+(copyright,watermark))';

        const expectedResults = {
            body: {
                children: {
                    header: {
                        usage: componentUsages.SINGLE_COMPONENT,
                    },
                    listItem: {
                        usage: componentUsages.ARRAYED_COMPONENT,
                    },
                    footer: {
                        usage: componentUsages.SINGLE_COMPONENT,
                    },
                },
            },
            header: {
                children: {},
            },
            listItem: {
                children: {},
            },
            footer: {
                children: {
                    copyright: {
                        usage: componentUsages.SINGLE_COMPONENT,
                    },
                    watermark: {
                        usage: componentUsages.SINGLE_COMPONENT,
                    },
                },
            },
            copyright: {
                children: {},
            },
            watermark: {
                children: {},
            },
        };

        const results = functionToTest(data);

        expect((_.values(results)).length).to.equal((_.values(expectedResults)).length);
        expect(results).to.deep.equal(expectedResults);
    });
    it('should find two components', function() {
        const data = 'page+content';

        const expectedResults = {
            page: {
                children: {
                    content: {
                        usage: componentUsages.SINGLE_COMPONENT,
                    },
                },
            },
            content: {
                children: {},
            },
        };

        const results = functionToTest(data);

        expect((_.values(results)).length).to.equal((_.values(expectedResults)).length);
        expect(results).to.deep.equal(expectedResults);
    });
    it('should find two components with one of them mapped', function() {
        const data = 'list+[listItem]';

        const expectedResults = {
            list: {
                children: {
                    listItem: {
                        usage: componentUsages.ARRAYED_COMPONENT,
                    },
                },
            },
            listItem: {
                children: {},
            },
        };

        const results = functionToTest(data);

        expect((_.values(results)).length).to.equal((_.values(expectedResults)).length);
        expect(results).to.deep.equal(expectedResults);
    });
});
