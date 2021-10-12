import '../styles.css';
import dynamic from 'next/dynamic';
import {TinaEditProvider} from 'tinacms/dist/edit-state';
import {Layout} from '../components/layout';
import {TinaCloudCloudinaryMediaStore} from 'next-tinacms-cloudinary';

const TinaCMS = dynamic(() => import('tinacms'), {ssr: false});

const {NEXT_PUBLIC_BASE_BRANCH, NEXT_PUBLIC_TINA_CLIENT_ID} = process.env;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
    process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;

const App = ({Component, pageProps}) => (
    <>
        <TinaEditProvider
            showEditButton={true}
            editMode={
                <TinaCMS
                    branch={NEXT_PUBLIC_BASE_BRANCH}
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
                    }}
                    /**
                     * Treat the Global collection as a global form
                     */
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
                            data={livePageProps.data?.getGlobalDocument?.data}
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

export default App;
