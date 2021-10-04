import React from 'react';
import { Col, Row } from 'react-bootstrap';
import cover from '../../Images/cover.jpg'

// About Us 

const Aboutus = () => {
    return (
        <div className="bg-dark container-fluid">
            <div><h1 className="text-light border border-light">About Us</h1></div>
            <Row>
                <Col md={6}>
                    <img src={cover} alt="" className="w-75"/>
                </Col>
                <Col className="mt-4">
                    <h3 className="text-light ">Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++. Created by Pamela Fox.</h3>
                    <h1 className="text-light fw-bold">Now We are Trying to make is as easy as possible</h1>
                </Col>
            </Row>
        </div>
    );
};

export default Aboutus;