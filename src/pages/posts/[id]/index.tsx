

// export default function PostSinglePage({params}:{params:any}) {

import { useRouter } from "next/router"

//     console.log(params)
//     return(
//         <h1>Post :</h1>
//     )
// }   return undefined

export default function PostSinglePage() {

    const router=useRouter()

    // console.log(router.query)

    const id=router.query?.id;

    
    return(
        <h1>Post :{id}</h1>
    )
}