import dynamic from 'next/dynamic';
import {TinaTemplate} from 'tinacms';
import {PagesBlocksContent} from '../../.tina/__generated__/types';
import {PdfIcon} from '../../assets/svgs';
import {Heading, HighlighterLink, List, Resume, TooltipLink} from '../elements';
const ReactMarkdown = dynamic(() => import('react-markdown'), {ssr: false});

interface IContent {
    data: PagesBlocksContent;
}

const renderers = {
    a: ({node, ...props}) => {
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
        <ReactMarkdown components={renderers} linkTarget="_blank">
            {data.body}
        </ReactMarkdown>
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
