import {Content} from '../components/blocks/content';

export default function FourOhFour() {
    return (
        <Content
            data={{
                headline: '404 - Page Not Found',
                body: "Oops! It seems there's nothing here, how embarrassing.",
            }}
        />
    );
}
