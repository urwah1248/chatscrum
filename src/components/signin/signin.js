import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom'

function SignIn(){
    return(
        <div className="signin">
            <h2 id="signinheading">Don't have an account?</h2>
            <h3 className='here'><Link to='/sign-up' className='link'>Sign Up, here</Link></h3>

            <form>
                <label htmlFor="email">Email
                    <input type="email" placeholder='Enter your Email' />
                </label>
                <label htmlFor="password">Password
                    <input type="password" placeholder='Enter your Password' />
                </label>
                <button><Link to='../scrumboard'>Sign in</Link></button>
            </form>
            
            <button><Link to='/'>Back to Home</Link></button>
        </div>
    )
}

export default SignIn;