import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <h2 className='w-50 mx-auto'>React Firebase Authentication</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;