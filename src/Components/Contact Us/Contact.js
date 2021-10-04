import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="bg-dark mb-4">
            <h1>Contact Us</h1>
            <Form className="container-lg">
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold text-white">Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-bold text-white">Type Your Message Here</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Contact;