import componentUsages from '../../src/consts/componentUsages';

export default {
    myComponent: {
        myComponent: {
            children: {},
        },
    },
    'page+content': {
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
    },
    'list+[listItem]': {
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
    },
    'body+(header,[listItem],footer+(copyright,watermark))': {
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
    },
};
