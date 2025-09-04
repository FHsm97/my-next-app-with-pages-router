import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/authLayout";


const PostPage:NextPageWithLayout=()=>{
    return (
        <>
            <h1>Post List</h1>
            <Link href='/'>
                Back To Home
            </Link>

        </>
    )
}

PostPage.getLayout=(page)=>{
    return(
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default PostPage;