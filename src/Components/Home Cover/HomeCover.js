import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cover from '../../Images/cover.jpg'

const HomeCover = () => {
    return (
        <div className="container-fluid">
            
                <Row className="bg-dark">
                    <Col className="w-50 bg-dark"><img src={cover} alt=""  height="100%" width="100%"/></Col>
                <Col className="d-flex flex-column justify-content-center align-item-center " >
                    <div className="my-4  text-center">
                        <div className="text-white fs-3 mt-4">
                            Learn Your Dream Code <br />Earn Yoour Dream 
                        </div>
                        <div>
                            <button className="mt-4 bg-white text-dark border fw-bold">Learn More</button>
                        </div>
                    </div>
                    </Col>
                </Row>
            
        </div>
    );
};

export default HomeCover;