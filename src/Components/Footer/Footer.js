import React from 'react';
import { Row, Col } from 'react-bootstrap';
import footerimg from '../../Images/footer.jpg'

const Footer = () => {
    return (
        <div className="container-fluid position-relative bottom-0  py-4 bg-primary">
            <Row>
                
                <Col>© 2021 e-Learn Education Private Limited. All rights reserved</Col>
            </Row>
        </div>
    );
};

export default Footer;