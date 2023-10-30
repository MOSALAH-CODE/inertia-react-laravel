import React, {useEffect, useState} from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";
import {Col, Container, Row} from "react-bootstrap";
import {Pagination} from "../Shared/Pagination.jsx";
import {Inertia} from "@inertiajs/inertia";

const Users = (props) => {
    const {time, users, filters} = props;
    const page = usePage();

    const [search, setSearch] = useState(filters.search);

    useEffect(() => {
        if (search !== filters.search) {
            Inertia.get(page.url, {search: search}, {
                preserveState: true,
                replace: true
            })
        }
    }, [search]);

    return (
        <>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col md={6}>
                        <div className={"align-items-center d-flex justify-content-between mb-4"}>
                            <h1 className={"m-0"}>Users</h1>
                            <div className="h-100 input-group w-50">
                                <input type="text" className="form-control"
                                       placeholder="Search..."
                                       aria-describedby="basic-addon1"
                                       value={search}
                                       onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>

                        <ul className={"list-inline"}>
                            {
                                users.data.map((user, index) => (
                                    <li
                                        className={`border d-flex justify-content-between p-3 shadow-sm ${
                                            index === 0 ? "rounded-top" : ""} ${index === users.length - 1 ? "rounded-bottom" : ""}`}
                                        key={user.id}
                                    >
                                        <p>{user.name}</p>
                                        <Link className={"fw-semibold text-decoration-none"}
                                              href={`/users/id?${user.id}`}>Edit</Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <Pagination links={users.links}/>
                    </Col>
                </Row>
            </Container>

            <p>The current time is: {time}</p>
            <Link href={"/users"} preserveScroll={true}>Refresh</Link>
        </>
    )
}

export default Users
