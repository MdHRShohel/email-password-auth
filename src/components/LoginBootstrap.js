import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleEmailBlur = (e) => {
        const email = e.target.value;
        setUserEmail(email);
    }

    const handleForgetPassword = () => {
        if(!userEmail){
            alert('Please enter your email first');
            return;
        }
        sendPasswordResetEmail(auth,userEmail)
            .then(() => {
                alert('Password reset email sent! Check your inbox.');
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!</h3>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Log in</Button>

            <p>
                <small>New to this Site? Please <Link to ='/register'>Register</Link></small>
            </p>
            <p>
                <small>Forgot Password? 
                <button type='button' onClick={handleForgetPassword} className='btn btn-link'>Please Reset Password.</button>
                </small>
            </p>
            </Form>
            {success && <p className='text-success'>Login Successful.</p>}
        </div>
    );
};

export default LoginBootstrap;