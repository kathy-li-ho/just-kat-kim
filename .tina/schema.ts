import {defineSchema, defineConfig} from 'tinacms';
import {contentBlockSchema} from '../components/blocks/content';
import {footerImageSchema} from '../components/blocks/footer';
import {photoBlockSchema} from '../components/blocks/photos';
import {videoBlockSchema} from '../components/blocks/video';

const schema = defineSchema({
    collections: [
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
                    ui: {
                        visualSelector: true,
                    },
                    templates: [
                        contentBlockSchema,
                        footerImageSchema,
                        photoBlockSchema,
                        videoBlockSchema,
                    ],
                },
            ],
        },
    ],
});
export default schema;

const branch = 'master';
const apiURL =
    process.env.NODE_ENV == 'development'
        ? 'http://localhost:4001/graphql'
        : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
    apiURL,
    schema,
    mediaStore: async () => {
        const pack = await import('next-tinacms-cloudinary');
        return pack.TinaCloudCloudinaryMediaStore;
    },
    cmsCallback: (cms) => {
        /**
         * Enables experimental branch switcher
         */
        cms.flags.set('branch-switcher', false);

        /**
         * When `tina-admin` is enabled, this plugin configures contextual editing for collections
         */
        import('tinacms').then(({RouteMappingPlugin}) => {
            const RouteMapping = new RouteMappingPlugin(
                (collection, document) => {
                    if (['pages'].includes(collection.name)) {
                        if (document._sys.filename === 'home') {
                            return `/`;
                        }
                        return undefined;
                    }
                    return `/${collection.name}/${document._sys.filename}`;
                }
            );
            cms.plugins.add(RouteMapping);
        });
        import('react-tinacms-editor').then((field) => {
            cms.plugins.add(field.MarkdownFieldPlugin);
        });
        return cms;
    },
    formifyCallback: ({formConfig, createForm, createGlobalForm}) => {
        if (formConfig.id === 'content/global/index.json') {
            return createGlobalForm(formConfig);
        }

        return createForm(formConfig);
    },
});
