import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {Outlet}  from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />

                    {/* Children pages  */}
                <div className=''>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Main;
