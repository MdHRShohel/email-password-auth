import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);


const RegisterReactBootStrap = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        //console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
        })

        .catch( error => {
            console.log('error', error.message);
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
                <Button variant="primary" type="submit">
                    Register
                </Button>
                </Form>
        </div>
    );
};

export default RegisterReactBootStrap;