import React from 'react'
import './signup.css'
import content from '../static/index' //Importing prop base file
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom'

const schema = yup.object().shape(
    {
        username: yup.string().required("Please enter your Name").min(3),
        email: yup.string().required("Please Enter a valid Email"),
        password: yup.string().required("Please enter a password").min(6).max(24)
    }
)

function SignUp(){

    const {register, handleSubmit,  formState:{errors}} = useForm(
        {
        resolver : yupResolver(schema)
        }
    );

    const onSubmit = data => console.log(data);

    return(
        <div className="signup">
            
            <h2 id="signinheading">Already have an account?</h2>
            <h3 className='here'><Link to='/sign-in' className='link'>Sign In, here</Link></h3>

            <form onSubmit={handleSubmit(onSubmit)} action="/static/data.js" method='POST'>
                {content.inputs.map((input, key) =>{
                    return (
                        <div className="signupfieldsets">
                            <div key={key}>
                                <label htmlFor={input.name}>{input.label}</label>
                                <input type={input.type} name={input.type}
                                placeholder={input.placeholder} {...register(input.name)} />
                                
                                <span className='message'>{errors[input.name]?.message}</span>
                            </div>
                        </div>
                    )
                })}
                <input type="submit" className='button' />
            </form>

            <button><Link to='/'>Back to Home</Link></button>
        </div>
    )
}

export default SignUp;
