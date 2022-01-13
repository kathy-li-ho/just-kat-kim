import React from 'react';
import Markdown from 'react-markdown';
import {PagesBlocksContent} from '../../.tina/__generated__/types';
import {PdfIcon} from '../../assets/svgs';
import {Heading, HighlighterLink, List, Resume, TooltipLink} from '../elements';

interface IContent {
    data: PagesBlocksContent;
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
        <Markdown renderers={renderers} linkTarget="_blank">
            {data.body}
        </Markdown>
    </>
);
