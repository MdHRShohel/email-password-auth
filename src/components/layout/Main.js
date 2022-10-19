import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav className='w-25 mx-auto'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;