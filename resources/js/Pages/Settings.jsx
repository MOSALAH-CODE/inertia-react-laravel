import React from 'react';
import {Link} from "@inertiajs/inertia-react";
const Settings = () => {

    return (
        <>
            <h1>Settings</h1>
            <Link href={'/logout'} as="button" method={"post"} data={{"foo": "Bar"}} className={"btn btn-danger"}>logout</Link>
        </>
    )
}

export default Settings
