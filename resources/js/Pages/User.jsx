import React from 'react';
import {Link} from "@inertiajs/inertia-react";

const User = (props) => {
    const {time} = props
    return (
        <>
            <h1>User</h1>
            <p style={{marginTop: "600px"}}>The current time is: {time}</p>
            <Link href={"user"} preserveScroll={true}>Refresh</Link>
        </>
    )
}

export default User
