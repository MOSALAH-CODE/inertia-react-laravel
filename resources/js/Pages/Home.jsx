import React from 'react';
const Home = (props) => {
    const { name, frameworks } = props;
    return (
        <>
            <h1>Hi, {name}</h1>
            <ul>
                {frameworks.map((framework)=> (
                    <li key={framework}>{framework}</li>
                ))}
            </ul>
        </>
    )
}

export default Home
