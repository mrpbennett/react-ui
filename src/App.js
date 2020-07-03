import React from 'react';
import './App.css';

import Navbar from './components/navbar/nav';
import Intro from './components/intro/intro';
import LoginForm from './components/login-form/loginform';
import Button from './components/button/button';
import Nav from './components/nav/nav';
import StarRating from './components/star-rating/starRating';
import Card from './components/card/card';
import Calendar from './components/calendar/calendar';

function App() {
    return (
        <div className='App'>
            <Navbar />

            <div className='fullscreen'>
                <Intro />
            </div>

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

            <div className='fullscreen'>
                <LoginForm />
            </div>

            <div className='fullscreen'>
                <Nav />
            </div>

            <div className='fullscreen'>
                <StarRating />
            </div>

            <div className='fullscreen'>
                <Card />
            </div>

            <div className='fullscreen'>
                <Calendar />
            </div>
        </div>
    );
}

export default App;
