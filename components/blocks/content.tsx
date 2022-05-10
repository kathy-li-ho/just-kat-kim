import React from 'react';
import Markdown from 'react-markdown/react-markdown.min';
import {TinaTemplate} from 'tinacms';
import {PdfIcon} from '../../assets/svgs';
import {Heading, HighlighterLink, List, Resume, TooltipLink} from '../elements';

interface IContent {
    data: {
        heading: string;
        body: string;
    };
}

const renderers = {
    link: ({node, ...props}) => {
        if (props.title && props.title === 'resume') {
            return (
                <Resume {...props}>
                    <PdfIcon /> {props.children}
                </Resume>
            );
        } else if (props.title) {
            return <TooltipLink data-title={props.title} {...props} title="" />;
        } else {
            return <HighlighterLink {...props} />;
        }
    },
    list: ({node, ...props}) => <List {...props} />,
};

export const Content = ({data}: IContent) => (
    <>
        <Heading>{data.heading}</Heading>
        <Markdown components={renderers} linkTarget="_blank">
            {data.body}
        </Markdown>
    </>
);

export const contentBlockSchema: TinaTemplate = {
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
