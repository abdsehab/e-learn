import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import coursephoto from '../../Images/courses.jpg';

// Hshorts for load Course Data again to show in the homepage

const Hshort = () => {
    const [courses, setCourses ] = useState([]);
    useEffect(() => {
            fetch("./shortdata.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    return (
        <div className="mt-4 bg-dark ">
            <Row>
                <Col>
                    <Row>
                    {courses.map(course => <Col md={6}> <Course Course={course}> </Course> </Col> )}
                    </Row>
                        
                    
                    
                </Col>
                <Col className="img-fluid">
                    <img src={coursephoto} alt="" />
                </Col>
            </Row>
            
        </div>
    );
};

export default Hshort;