import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../index.js';
import { login } from '../index.js';
import { homepage } from '../index.js';
import Links from './links.js';
import LoggedInComponent from './usernameandlogout.js';

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser);
    console.log(currentUser);
    return (
        <>
            <nav className="navbar bg-primary mb-2 pt-4">
            <div className="row container-fluid text-left">
                <div className="col-lg-4">
                    <ul>
                    <li className="list-inline-item h4 ml-0"><a onClick={() => dispatch(homepage())} href="#" className="text-white">Homepage</a></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4 text-right">
                    {currentUser === '' || currentUser === 'Login unsuccessful' ? <Links /> : <LoggedInComponent />}
                </div>
            </div>
            </nav>
        </>
    );
}

export default Header;
