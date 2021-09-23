import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../index.js';
import { login } from '../index.js';


const Links = () => {
    const dispatch = useDispatch();
    return (
        <ul>
            <li className="list-inline-item h4 mr-4"><a onClick={() => dispatch(register())} href="#" className="text-white">Register</a></li>
            <li className="list-inline-item h4 mr-0"><a onClick={() => dispatch(login())} href="#" className="text-white">Login</a></li>
        </ul>
    );
};

export default Links;