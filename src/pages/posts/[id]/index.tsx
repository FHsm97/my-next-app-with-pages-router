import { Post } from "@/types/Post";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router"

// export default function PostSinglePage({params}:{params:any}) {

//     console.log(params)
//     return(
//         <h1>Post :</h1>
//     )
// }   return undefined



export default function PostSinglePage({post}:{post:Post}) {

    // const router=useRouter()

    // console.log(router.query)

    // const id=router.query?.id;

    
    return(
        <>
        <h1>Post :{post.title}</h1>

        <Link href='/posts'>Back To Post List</Link>
        
        </>
    )
}

//server side 
export const getServerSideProps:GetServerSideProps=async({params,req})=>{
    let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)


    // console.log(req.cookies)


    if (!res.ok) {
        if (res.status==404) {
            return {
                // notFound:true
                redirect:{
                    destination:'/posts',
                    permanent:false

                }
            } 
        }
        throw new Error('somthing went wrong!')
        
    }

    let post= await res.json();


    return{
        props:{
            post
        }
    }

}