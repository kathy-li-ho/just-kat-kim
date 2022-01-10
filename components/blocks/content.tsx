import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import {PagesBlocksContent} from '../../.tina/__generated__/types';
import {PdfIcon} from '../../assets/svgs';
import {HighlighterLink, List, Resume, TooltipLink} from '../elements';
import {SIZES} from '../style';

interface IContent {
    data: PagesBlocksContent;
}

const Heading = styled.h1`
    font-size: ${SIZES.TITLE};
    font-weight: 400;
    line-height: 2;
`;

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
