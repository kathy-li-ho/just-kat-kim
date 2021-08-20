import {previewHandler} from 'next-tinacms-github';

export default previewHandler(process.env.NEXT_PUBLIC_SIGNING_KEY);
