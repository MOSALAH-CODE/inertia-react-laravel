import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";
import NavLink from "./NavLink.jsx"
export const Nav = (props) => {
    const page = usePage();
    return (
        <div className={"container-fluid px-4 py-2 shadow-sm"}>
            <div className={"align-items-center d-flex justify-content-between"}>
                <div className={"d-flex gap-3 align-items-baseline"}>
                    <Link href={'/'} className={"fs-4 fw-semibold text-decoration-none"} >App</Link>
                    <p className={"text-body-secondary"}>Welcome back {page.props.auth.user.username}</p>
                </div>
                <ul className={"d-flex gap-4 list-inline m-0"}>
                    <li><NavLink name={"Home"} active={ page.component === "Home" }/></li>
                    <li><NavLink name={"User"} active={ page.component === "User" }/></li>
                    <li><NavLink name={"Settings"} active={ page.component === "Settings" }/></li>
                </ul>
            </div>
        </div>


    )
}

export default Nav
