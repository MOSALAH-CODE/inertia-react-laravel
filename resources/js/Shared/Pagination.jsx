import {Link} from "@inertiajs/inertia-react";
import React from "react";

export const Pagination = ({links}) => {
    return (
        <div className={"d-flex gap-2"}>
            {
                links.map((link, index) => (
                    <Link key={index} href={link.url} className={"text-decoration-none"}
                          dangerouslySetInnerHTML={{__html: link.label}}></Link>
                ))
            }
        </div>
    )
}

