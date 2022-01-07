import '../styles.css';
import dynamic from 'next/dynamic';
import {TinaEditProvider} from 'tinacms/dist/edit-state';
import {Layout} from '../components/layout';
const TinaCMS = dynamic(() => import('tinacms'), {ssr: false});
import {TinaCloudCloudinaryMediaStore} from 'next-tinacms-cloudinary';

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
    process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;
// const NEXT_PUBLIC_HIDE_EDIT_BUTTON =
//     process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON || 1;

const App = ({Component, pageProps}) => {
    return (
        <>
            <TinaEditProvider
                showEditButton={!Boolean(Number(NEXT_PUBLIC_SHOW_EDIT_BUTTON))}
                editMode={
                    <TinaCMS
                        branch="master"
                        clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
                        isLocalClient={Boolean(
                            Number(NEXT_PUBLIC_USE_LOCAL_CLIENT)
                        )}
                        mediaStore={TinaCloudCloudinaryMediaStore}
                        cmsCallback={(cms) => {
                            import('react-tinacms-editor').then(
                                ({MarkdownFieldPlugin}) => {
                                    cms.plugins.add(MarkdownFieldPlugin);
                                }
                            );
                            cms.events.subscribe(
                                'plugin:add:content-creator',
                                () => {
                                    cms.plugins
                                        .all('content-creator')
                                        .map((plugin) => {
                                            cms.plugins.remove(plugin);
                                        });
                                }
                            );
                        }}
                        // Treat the Global collection as a global form
                        formifyCallback={({
                            formConfig,
                            createForm,
                            createGlobalForm,
                        }) => {
                            if (formConfig.id === 'getGlobalDocument') {
                                return createGlobalForm(formConfig);
                            }

                            return createForm(formConfig);
                        }}
                        {...pageProps}
                    >
                        {(livePageProps) => (
                            <Layout
                                rawData={livePageProps}
                                data={
                                    livePageProps.data?.getGlobalDocument?.data
                                }
                            >
                                <Component {...livePageProps} />
                            </Layout>
                        )}
                    </TinaCMS>
                }
            >
                <Layout
                    rawData={pageProps}
                    data={pageProps.data?.getGlobalDocument?.data}
                >
                    <Component {...pageProps} />
                </Layout>
            </TinaEditProvider>
        </>
    );
};

export default App;
