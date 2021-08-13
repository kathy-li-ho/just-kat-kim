import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../components/layout'
import { useEditState } from 'tinacms/dist/edit-state'

const GoToEditPage: React.FC = () => {
    const { setEdit } = useEditState()
    const router = useRouter()
    useEffect(() => {
        setEdit(true)
        router.back()
    }, [])
    return (
        <Layout>
            <h2>Going into edit mode...</h2>
        </Layout>
    )
}

export default GoToEditPage
