import {Blocks} from '../components/blocks-renderer';
import {ExperimentalGetTinaClient} from '../.tina/__generated__/types';
import {useTina} from 'tinacms/dist/edit-state';
import {Layout} from '../components/layout';

export default function HomePage(
    props: AsyncReturnType<typeof getStaticProps>['props']
) {
    const {data} = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    return (
        <Layout>
            <Blocks {...data.pages} />
        </Layout>
    );
}

export const getStaticProps = async ({params}) => {
    const client = ExperimentalGetTinaClient();
    const tinaProps = await client.pages({
        relativePath: `${params.filename}.md`,
    });
    return {
        props: {
            data: tinaProps.data,
            query: tinaProps.query,
            variables: tinaProps.variables,
        },
    };
};

export const getStaticPaths = async () => {
    const client = ExperimentalGetTinaClient();
    const pagesListData = await client.pagesConnection();
    return {
        paths: pagesListData.data.pagesConnection.edges.map((page) => ({
            params: {filename: page.node._sys.filename},
        })),
        fallback: false,
    };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;
