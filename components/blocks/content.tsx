import React from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { PagesBlocksContent } from '../../.tina/__generated__/types'
import { HighlighterLink, List, TooltipLink } from '../elements'

interface IContent {
    data: PagesBlocksContent
}

const Heading = styled.h1`
    font-size: 4.5rem;
    font-weight: 400;
    line-height: 2;
`

const renderers = {
    link: ({ node, ...props }) => {
        return props.title ? (
            <TooltipLink data-title={props.title} {...props} title="" />
        ) : (
            <HighlighterLink {...props} />
        )
    },
    list: ({ node, ...props }) => <List {...props} />,
}

export const Content = ({ data }: IContent) => (
    <>
        <Heading>{data.heading}</Heading>
        <Markdown renderers={renderers} linkTarget="_blank">
            {data.body}
        </Markdown>
    </>
)
