import PostComment from "@/components/postComments";
import { Post } from "@/types/Post";
import {  GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
// import { useRouter } from "next/router"

// export default function PostSinglePage({params}:{params:any}) {

//     console.log(params)
//     return(
//         <h1>Post :</h1>
//     )
// }   return undefined



export default function PostSinglePage({ post }: { post: Post }) {

    // const router=useRouter()

    // console.log(router.query)

    // const id=router.query?.id;


    return (
        <>
            <h1>Post :{post.title}</h1>
            <hr />
            <PostComment postId={post?.id}/>

            <Link href='/posts'>Back To Post List</Link>

        </>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Error('somthing went wrong!')
    }

    const posts = await res.json();
    return {
        paths: posts.map((post: Post) => ({
            params: { id: post?.id.toString() }
        })
        ),
        fallback: false
    }
}

//server side 
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)


    // console.log(req.cookies)


    if (!res.ok) {
        if (res.status == 404) {
            return {
                // notFound:true
                redirect: {
                    destination: '/posts',
                    permanent: false

                }
            }
        }
        throw new Error('somthing went wrong!')

    }

    const post = await res.json();


    return {
        props: {
            post
        }
    }

}