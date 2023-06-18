import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.length <= 0 || password.length <= 0) {
            setError(true)
        }
        else {
            localStorage.setItem('user', JSON.stringify({
                email, password
            }))
            setError(false)
            setEmail('')
            setPassword('')
        }
    }
    return (
        <div className='register'>
            <h2>Register</h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                {error ? <p className='error-para'>"Email or password isn't entered!"</p>
                    : null}
                <div className='email-div'>
                    <label htmlFor="email" >Email: </label>
                    <input value={email} onChange={handleEmailChange} type="email" id="email"  />
                </div>
                <div className='password-div'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={handlePassChange}  />
                </div>
                <button type="submit" className='register-btn'>Register</button>
            </form>
            <div>
                Already have an account?
                <Link to="/login"><button className='login-link'>Login</button></Link>
            </div>
        </div>
    )
}

export default Register;
