import { Comment } from "@/types/Comment"
import { useEffect, useState } from "react"


export default function PostComment({ postId }: { postId: number }) {

    const [comments, setComments] = useState([])

    const getPostComments = async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

        if (!res.ok) {
            throw new Error('somthing went wrong!')
        }

        return await res.json();

    }

    useEffect(() => {

        getPostComments()
            .then((comments) => setComments(comments))
            .catch((err) => console.log(err))

    }, [])


    return (
        <div>
            <h3>Comment List</h3>
            <hr />
            {
                comments.map((comment: Comment) => (
                    <div key={comment?.id}>
                        <h4>{comment?.name}</h4>
                        <p>{comment?.body}</p>
                    </div>

                ))
            }

        </div>
    )
}