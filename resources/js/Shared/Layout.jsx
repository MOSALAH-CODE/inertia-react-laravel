import Nav from "../Shared/Nav.jsx";
import React from "react";
import {Container} from "react-bootstrap";

const Layout = ({children}) => {
    return (
        <div>
            <Nav/>
            <Container className={"py-3"}>
                <iframe height="200px" width="100%" scrolling="no" seamless
                        src="https://player.simplecast.com/8503e054-0dd9-4689-96ec-4da2786e2425?dark=false"></iframe>
                {children}
            </Container>
        </div>
    )
}

export default Layout
