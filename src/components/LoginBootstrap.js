import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!</h3>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">Log in</Button>
            <p><small>New to this Site? Please <Link to ='/register'>Register</Link></small></p>
            </Form>

        </div>
    );
};

export default LoginBootstrap;