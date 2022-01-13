import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {Layout} from '../components/layout';
import {useEditState} from 'tinacms/dist/edit-state';
import {Heading} from '../components/elements';

const GoToEditPage: React.FC = () => {
    const {setEdit} = useEditState();
    const router = useRouter();
    useEffect(() => {
        setEdit(false);
        router.back();
    }, []);
    return (
        <Layout>
            <Heading>Exiting edit mode...</Heading>
        </Layout>
    );
};

export default GoToEditPage;
