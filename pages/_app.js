import '../styles.css';
import dynamic from 'next/dynamic';
import {TinaEditProvider} from 'tinacms/dist/edit-state';
import {Layout} from '../components/layout';
import {GithubClient} from 'react-tinacms-github';
import {NextGithubMediaStore} from 'next-tinacms-github';

const TinaCMS = dynamic(() => import('tinacms'), {ssr: false});
const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
    process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;

const githubClient = new GithubClient({
    proxy: '/api/proxy-github',
    authCallbackRoute: '/api/create-github-access-token',
    clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    baseRepoFullName: process.env.NEXT_PUBLIC_REPO_FULL_NAME,
});

console.log(
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    process.env.NEXT_PUBLIC_REPO_FULL_NAME
);

const App = ({Component, pageProps}) => (
    <>
        <TinaEditProvider
            showEditButton={true}
            editMode={
                <TinaCMS
                    branch="master"
                    clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
                    isLocalClient={Boolean(
                        Number(NEXT_PUBLIC_USE_LOCAL_CLIENT)
                    )}
                    mediaStore={NextGithubMediaStore}
                    cmsCallback={(cms) => {
                        import('react-tinacms-editor').then(
                            ({MarkdownFieldPlugin}) => {
                                cms.plugins.add(MarkdownFieldPlugin);
                            }
                        );
                        cms.registerApi('github', githubClient);
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
