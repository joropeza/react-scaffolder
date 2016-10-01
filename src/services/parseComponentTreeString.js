import parenthesis from 'parenthesis';
import _ from 'lodash';

const componentUsages = {
    SINGLE_COMPONENT: 'SINGLE_COMPONENT',
    ARRAYED_COMPONENT: 'ARRAYED_COMPONENT',
};

const removeBrackets = aString =>
    aString.replace('[', '').replace(']', '');

const getReferenceIdFromParenthesisString = aString =>
    Number(aString.replace('(\\', '').replace(')', ''));

const getUsage = aString =>
    (aString.startsWith('[')) ? componentUsages.ARRAYED_COMPONENT : componentUsages.SINGLE_COMPONENT;

const breakApartChildString = aString =>
    aString.split('+');

const getNextCharecter = (aString, aSubstring) =>
    (aString.substr(aString.indexOf(aSubstring) + aSubstring.length)).charAt(0);

const createBaseComponentTree = (parendString) => {
    // create the base component tree
    const componentTree = {};
    _.forEach(parendString, (pstring) => {
        const plusBrokenPString = pstring.split('+');
        _.forEach(plusBrokenPString, (componentName) => {
            if (!componentName.startsWith('(\\')) {
                const commaBrokenPString = componentName.split(',');
                _.forEach(commaBrokenPString, (subComponentName) => {
                    const finalComponentName = removeBrackets(subComponentName);
                    componentTree[finalComponentName] = { children: {} };
                });
            }
        });
    });
    _.forEach(parendString, (pstring) => {
        const plusBrokenPString = pstring.split('+');
        const components = plusBrokenPString[0].split(',');
        _.forEach(components, (component) => {
            const componentChildren = [];
            for (let i = 1; i < plusBrokenPString.length; i += 1) {
                const childSegment = plusBrokenPString[i];
                if (childSegment.startsWith('(\\')) {
                    // console.log('is paren reffed', getReferenceIdFromParenthesisString(childSegment));
                }
                const parsedChildSegment = (childSegment.startsWith('(\\')) ?
                    parendString[getReferenceIdFromParenthesisString(childSegment)] :
                    childSegment;
                const commaBrokenChilds = parsedChildSegment.split(',');
                _.forEach(commaBrokenChilds, childString => {
                    // if a child has a plus, it needs to be broken up too
                    // could this be done recursively?

                    const plusBrokenChildString = pstring.split('+');

                    const child = (plusBrokenChildString.length === 1) ?
                        childString :
                        breakApartChildString(childString)[0];

                    const nextCharecter = getNextCharecter(pstring, component);
                    if (nextCharecter === '+') {
                        componentChildren.push(child);
                    }
                });
            }
            console.log(`i am ${component} and my ${componentChildren.length} children are ${componentChildren}`);
            _.forEach(componentChildren, child => {
                if(componentTree[component]) {
                    componentTree[component].children[removeBrackets(child)] = {
                        usage: getUsage(child)
                    };
                }
            });
        });
    });

    // go back and see who had a plus something
    console.log(parendString);

    return componentTree;
};

const parseComponentTreeString = (componentTreeString) => {
    const parendString = parenthesis(
        componentTreeString, {
            brackets: ['()'],
            escape: '\\',
            flat: true,
        }
    );
    // console.log('paren broken array is', parendString);

    const componentTree = createBaseComponentTree(parendString);
    // console.log('component map is', componentTree);

    return componentTree;
};

export default parseComponentTreeString;
