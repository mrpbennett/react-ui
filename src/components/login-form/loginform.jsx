import React from 'react';
import './loginform.scss';

import Button from '../button/button';

const LoginForm = (props) => {
    return (
        <div className='loginFormContainer'>
            <form className='loginForm'>
                <div className='loginFormUsername'>
                    <label for='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        placeholder='Username'></input>
                </div>

                <div className='loginFormPassword'>
                    <label for='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                        placeholder='Password'></input>
                </div>

                <div>
                    <Button
                        button
                        onClick={() => console.log('button was clicked')}
                        buttonStyle='btn-primary-solid'
                        buttonSize='btn-md'
                        buttonText='btn-upper'
                        buttonWidth='btn-wide'
                        borderRadius='btn-radius-md'>
                        Sign In
                    </Button>
                </div>
            </form>
            <p className='loginFormBottom'>
                &copy;2020 Corp. All rights reserved.
            </p>
        </div>
    );
};

export default LoginForm;
