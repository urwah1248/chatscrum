import React from 'react'
import './signup.css'
import content from '../../static/index' //Importing prop base file
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
            <h2 id="signupheading">Don't have an account!</h2>
            <h3 id='here'>Sign Up, here</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
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
        </div>
    )
}

export default SignUp;
