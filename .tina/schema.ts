import {defineSchema} from '@tinacms/cli';

const defaultPhoto = {
    photo: 'https://dummyimage.com/400x600/efefef/dddddd.jpg&text=+=%5E%5E=',
};

const photoBlockShema = {
    name: 'photos',
    label: 'Photos',
    ui: {
        defaultItem: {
            photos: [defaultPhoto, defaultPhoto, defaultPhoto],
        },
    },
    fields: [
        {
            type: 'object',
            label: 'Featured Photos',
            name: 'photos',
            list: true,
            ui: {
                defaultItem: {
                    photo: {...defaultPhoto},
                },
            },
            fields: [
                {
                    type: 'image',
                    label: 'Photo',
                    name: 'photo',
                },
            ],
        },
    ],
};

const contentBlockSchema = {
    name: 'content',
    label: 'Content',
    ui: {
        defaultItem: {
            body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Heading',
            name: 'heading',
        },
        {
            type: 'string',
            ui: {
                component: 'markdown',
            },
            label: 'Body',
            name: 'body',
        },
    ],
};

const videoSchema = {
    name: 'video',
    label: 'Video',
    ui: {
        defaultItem: {
            url: 'https://vimeo.com/85683143',
        },
    },
    fields: [
        {
            type: 'string',
            label: 'Video URL',
            name: 'url',
        },
    ],
};

const footerImageSchema = {
    name: 'footerImage',
    label: 'Footer Image',
    ui: 'image',
    fields: [
        {
            type: 'image',
            label: 'Footer Image',
            name: 'footerImg',
        },
    ],
};

export default defineSchema({
    collections: [
        {
            label: 'Global',
            name: 'global',
            path: 'content/global',
            fields: [
                {
                    type: 'object',
                    label: 'Meta',
                    name: 'meta',
                    fields: [
                        {
                            type: 'string',
                            label: 'Title',
                            name: 'title',
                            ui: {
                                defaultItem: {
                                    title: 'Just Kat Kim',
                                },
                            },
                        },
                        {
                            type: 'string',
                            label: 'Description',
                            name: 'description',
                            ui: {
                                defaultItem: {
                                    description:
                                        'The personal website of Kat Kim',
                                },
                            },
                        },
                    ],
                },
                {
                    type: 'object',
                    label: 'Header',
                    name: 'header',
                    fields: [
                        {
                            type: 'object',
                            label: 'Nav Links',
                            name: 'nav',
                            list: true,
                            ui: {
                                defaultItem: {
                                    href: 'home',
                                    label: 'Home',
                                },
                            },
                            fields: [
                                {
                                    type: 'string',
                                    label: 'Link',
                                    name: 'href',
                                },
                                {
                                    type: 'string',
                                    label: 'Label',
                                    name: 'label',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            label: 'Pages',
            name: 'pages',
            path: 'content/pages',
            fields: [
                {
                    type: 'object',
                    list: true,
                    name: 'blocks',
                    label: 'Sections',
                    // @ts-ignore
                    templates: [
                        contentBlockSchema,
                        photoBlockShema,
                        videoSchema,
                        footerImageSchema,
                    ],
                },
            ],
        },
    ],
});
