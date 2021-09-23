import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const LoggedInComponent = () => {
    const userHere = useSelector(state => state.currentUser);
    return (
        <ul>
        <li className='list-inline-item h4 text-warning'>{userHere}</li>
        <li className='list-inline-item h4'><a className="text-white" href="#">Logout</a></li>
        </ul>
    )
}

export default LoggedInComponent;
