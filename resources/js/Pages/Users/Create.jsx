import React from "react";
import { useForm } from '@inertiajs/react';
import {Inertia} from "@inertiajs/inertia";


const Create = (props) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault();

        // Inertia.post('/users/create', data)
        post('/users');
    }
    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="password">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                />
                {errors.name && <div>{errors.name}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
                {/*{errors.email && <div>{errors.email}</div>}*/}
                <div>{errors.email}</div>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                />
                {errors.password && <div>{errors.password}</div>}

            </div>
            <button type="submit" className="btn btn-primary" disabled={processing}>Submit</button>

        </form>
    );
};

export default Create;
