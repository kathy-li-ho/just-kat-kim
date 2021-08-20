import {createAuthHandler} from 'next-tinacms-github';

export default createAuthHandler(
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    process.env.NEXT_PUBLIC_SIGNING_KEY
);
