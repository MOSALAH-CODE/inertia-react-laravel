import React from "react";
import {Link} from "@inertiajs/inertia-react";
const NavLink = ({name, active}) => {
    return (
        <Link href={name==="Home" ? '/' : `/${name.toLowerCase()}`} className={`${active ? "fw-bold": ""} text-decoration-none`} >{name}</Link>
    )
}

export default NavLink
