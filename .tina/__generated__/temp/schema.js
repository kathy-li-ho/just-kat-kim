"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("@tinacms/cli");
var defaultPhoto = {
    photo: 'https://dummyimage.com/400x600/efefef/dddddd.jpg&text=+=%5E%5E=,
};
var photoBlockShema = {
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
                    photo: __assign({}, defaultPhoto),
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
var contentBlockSchema = {
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
var videoSchema = {
    name: 'video',
    label: 'Video',
    ui: {
        defaultItem: {
            url: 'https://vimeo.com/85683143',
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
var footerImageSchema = {
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
exports.default = (0, cli_1.defineSchema)({
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
                        videoSchema,
                        footerImageSchema,
                    ],
                },
            ],
        },
    ],
});
