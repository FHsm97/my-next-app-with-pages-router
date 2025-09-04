import { useRouter } from "next/router";




export default function CalculatePage() {
    const router=useRouter()
    console.log(router.query)

    return(
        <h2>Caculate</h2>
    )
}