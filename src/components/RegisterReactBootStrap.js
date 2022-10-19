import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);


const RegisterReactBootStrap = () => {
    const  [passwordError, setPasswordError] = useState('');
    const [success,setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Password must contain 2 upper case');
            return;
        }
        if(password.length < 6){
            setPasswordError('Password must be at least 6 characters long');
            return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setPasswordError('Password must contain at least one special character');
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
        })

        .catch( error => {
            console.log('error', error.message);
            setPasswordError(error.message);
        })
    }

    return (
        <div>
             <Form onSubmit={handleRegister}
              className='w-50 mx-auto'>
                <h3 className='text-primary'>Please Register!!!</h3>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Created Successfully.</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p><small>Already Have an account? Please <Link to ='/login'>Log in</Link></small></p>
                </Form>
        </div>
    );
};

export default RegisterReactBootStrap;