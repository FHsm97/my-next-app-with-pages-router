import { ReactNode } from "react";


export default function AuthLayout({children}:{children:ReactNode}) {

    //check some condition


    return(
        <div>
            user: hi
            <h2>{children}</h2>
        </div>
    )

}