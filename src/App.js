import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/nav';
import LoginForm from './components/login-form/loginform';
import Button from './components/button/button';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <div className='fullscreen'>
                <Button
                    button
                    onClick={() => console.log('button was clicked')}
                    buttonStyle='btn-primary-solid'
                    buttonSize='btn-md'
                    buttonText='btn-upper'
                    borderRadius='btn-radius-lg'>
                    Click Me I'm A Btn
                </Button>
            </div>

            <span className='flex items-stretch'>1.</span>
            <div className='fullscreen'>
                <LoginForm />
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
