import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usernameDisplay } from '../index.js';
import { loggedIn } from '../index.js'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userHere = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    const readUsername = (e) => {
        setUsername(e.target.value);
    }

    const readPassword = (e) => {
        setPassword(e.target.value);
    }

    const sendData = async (e) => {
        e.preventDefault();
        await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then(res => res.json())
            .then(data => dispatch(usernameDisplay(data.message)));
    }

    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" onChange={readUsername} />
                <br/>
                <input type="password" placeholder="password" onChange={readPassword}/>
                <br/>
                <button onClick={sendData}>Send</button>
            </form>
            <h3>{userHere}</h3>
        </>
    )
}

export default Login;
