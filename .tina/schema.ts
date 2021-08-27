import {defineSchema} from '@tinacms/cli';

const defaultPhoto = {
    image: 'https://picsum.photos/400/600',
};

const photoBlockShema = {
    name: 'photos',
    label: 'Photos',
    ui: {
        defaultItem: {
            items: [defaultPhoto, defaultPhoto, defaultPhoto],
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
                    ...defaultPhoto,
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

const galleryBlockShema = {
    name: 'gallery',
    label: 'Gallery',
    ui: {
        defaultItem: {
            items: [defaultPhoto, defaultPhoto, defaultPhoto, defaultPhoto],
        },
    },
    fields: [
        {
            type: 'object',
            label: 'Gallery',
            name: 'gallery',
            list: true,
            ui: {
                defaultItem: {
                    ...defaultPhoto,
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
            url: 'https://youtu.be/3xg5sDPr_1M',
        },
    },
    fields: [
        {
            type: 'image',
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
                {
                    type: 'object',
                    label: 'Footer',
                    name: 'footer',
                    fields: [
                        {
                            type: 'object',
                            label: 'Social Links',
                            name: 'social',
                            fields: [
                                {
                                    type: 'object',
                                    label: 'Gmail',
                                    name: 'gmail',
                                    fields: [
                                        {
                                            type: 'string',
                                            label: 'Handle',
                                            name: 'handle',
                                        },
                                        {
                                            type: 'string',
                                            label: 'Link',
                                            name: 'link',
                                        },
                                    ],
                                },
                                {
                                    type: 'object',
                                    label: 'Instagram',
                                    name: 'instagram',
                                    fields: [
                                        {
                                            type: 'string',
                                            label: 'Handle',
                                            name: 'handle',
                                        },
                                        {
                                            type: 'string',
                                            label: 'Link',
                                            name: 'link',
                                        },
                                    ],
                                },
                                {
                                    type: 'object',
                                    label: 'IMDb',
                                    name: 'imdb',
                                    fields: [
                                        {
                                            type: 'string',
                                            label: 'Handle',
                                            name: 'handle',
                                        },
                                        {
                                            type: 'string',
                                            label: 'Link',
                                            name: 'link',
                                        },
                                    ],
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
                        galleryBlockShema,
                        videoSchema,
                        footerImageSchema,
                    ],
                },
            ],
        },
    ],
});
