var _ = require('lodash');

var data = {
    body: {
        children: {
            header: {
                usage: 'SINGLE_COMPONENT',
            },
            listItem: {
                usage: 'ARRAYED_COMPONENT',
            },
            footer: {
                usage: 'SINGLE_COMPONENT',
            },
        },
    }
};

console.log(data);

// 1. map all the children into an array

var map = _.map(data.body.children, function(child) {
    return child;
});

console.log('map', map);

var mapValues = _.mapValues(data.body.children, function(child) {
    return child;
});

console.log('mapValues', mapValues);
