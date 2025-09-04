import { ReactNode } from "react";


export default function AuthLayout({children}:{children:ReactNode}) {

    //check some condition


    return(
        <div>
            <span>user :::::</span>
            <h2>{children}</h2>
        </div>
    )

}