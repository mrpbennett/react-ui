import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/nav';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <div className='fullscreen'>
                <img src={logo} className='App-logo' alt='logo' />
            </div>

            <div className='fullscreen'>
                <img src={logo} className='App-logo' alt='logo' />
            </div>

            <div className='fullscreen'>
                <img src={logo} className='App-logo' alt='logo' />
            </div>

            <div className='fullscreen'>
                <img src={logo} className='App-logo' alt='logo' />
            </div>

            <div className='fullscreen'>
                <img src={logo} className='App-logo' alt='logo' />
            </div>
        </div>
    );
}

export default App;
