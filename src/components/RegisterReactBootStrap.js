import React from 'react';
import { Button, Form } from 'react-bootstrap';

const RegisterReactBootStrap = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }

    return (
        <div>
             <Form onSubmit={handleRegister}
              className='w-50 mx-auto'>
                <h3 className='text-primary'>Please Register!!!</h3>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                </Form>
        </div>
    );
};

export default RegisterReactBootStrap;