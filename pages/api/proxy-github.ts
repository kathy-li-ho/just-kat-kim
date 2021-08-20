import {apiProxy} from 'next-tinacms-github';

export default apiProxy(process.env.NEXT_PUBLIC_SIGNING_KEY);
