import React from 'react';
import './loginform.scss';

const LoginForm = (props) => {
    return (
        <div className='loginFormContainer'>
            <form className='loginForm'>
                <div className='loginFormUsermame'>
                    <label for='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        placeholder='Username'></input>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
