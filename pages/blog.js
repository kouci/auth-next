import { getSession } from 'next-auth/react'

function Blog({data}) {
    return <h1>Blg Page  -- {data}</h1>
}


export default Blog


export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(!session) {
        return{
            redirect: {
                destination: 'api/auth/signin?callbackUrl=http://localhost:3000/blog',
                permanent: false
            }
        }
    }

    return{
        props:{
            session,
            data: session ? 'Liste of 100 personalized blogs ' : 'Lites of free blogs'
        }
    }
}
