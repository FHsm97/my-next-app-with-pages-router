import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/authLayout";
import { GetServerSideProps } from "next";
import { Post } from "@/types/Post";


const PostPage: NextPageWithLayout<{ posts: Post[] }> = ({ posts }: { posts: Post[] }) => {
    return (
        <>
            <div>{
                posts?.map((post: any) => (
                    <div key={post?.id}>
                        <Link href={`/posts/${post?.id}`}>
                            <h2>title:{post?.title}</h2>
                        </Link>
                        <br />
                        <hr />
                    </div>))
            }</div>
            
            <Link href='/'>
                Back To Home
            </Link>

        </>
    )
}

PostPage.getLayout = (page) => {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ }) => {

    let res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Error('somthing went wrong!')
    }

    let posts = await res.json();


    return {
        props: {
            posts
        }
    }

}

export default PostPage;