import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../components/layout'
import { useEditState } from 'tinacms/dist/edit-state'

const GoToEditPage: React.FC = () => {
    const { setEdit } = useEditState()
    const router = useRouter()
    useEffect(() => {
        setEdit(false)
        router.back()
    }, [])
    return (
        <Layout>
            <h2>Exiting edit mode...</h2>
        </Layout>
    )
}

export default GoToEditPage
