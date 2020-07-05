import React from 'react';
import './App.css';

import Navbar from './components/navbar/nav';
import Intro from './components/intro/intro';
import LoginForm from './components/login-form/loginform';
import Button from './components/button/button';
import Nav from './components/nav/nav';
import TWNav from './components/nav/tw-nav';
import StarRating from './components/star-rating/starRating';
import Card from './components/card/card';
import TWCard from './components/card/tw-card';
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
                <p className='text-left mb-2 font-mono text-xs'>pure .scss</p>

                <TWNav />
                <p className='text-left mt-2 font-mono text-xs'>TailWind CSS</p>
            </div>

            <div className='fullscreen'>
                <StarRating />
            </div>

            <div className='fullscreen'>
                <div className='flex'>
                    <div className='mr-4'>
                        <Card />
                        <p className='text-xs text-center mt-2 font-mono'>
                            Pure .Scss
                        </p>
                    </div>
                    <div>
                        <TWCard />
                        <p className='text-xs text-center mt-2 font-mono'>
                            TailWind CSS
                        </p>
                    </div>
                </div>
            </div>

            <div className='fullscreen'>
                <Calendar />
            </div>
        </div>
    );
}

export default App;
