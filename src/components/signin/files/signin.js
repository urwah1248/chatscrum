import React from 'react'
import './signin.css'

function SignIn(){
    return(
        <div className="signin">
            <h2 id="signinheading">Already have an account!</h2>
            <h3 className='here'>Sign In, here</h3>

            <form>
                <label htmlFor="email">Email
                    <input type="email" placeholder='Enter your Email' />
                </label>
                <label htmlFor="password">Password
                    <input type="password" placeholder='Enter your Password' />
                </label>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default SignIn;
