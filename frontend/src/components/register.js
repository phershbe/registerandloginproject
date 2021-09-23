import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const readUsername = (e) => {
        setUsername(e.target.value);
    }

    const readPassword = (e) => {
        setPassword(e.target.value);
    }

    const sendData = async (e) => {
        e.preventDefault();
        await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
    }

    return (
        <>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="username" onChange={readUsername} />
                <br/>
                <input type="password" placeholder="password" onChange={readPassword} />
                <br/>
                <button onClick={sendData}>Send</button>
            </form>
        </>
    )
}

export default Register;
