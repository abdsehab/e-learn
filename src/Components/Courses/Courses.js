import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { Col, Row } from 'react-bootstrap';

const Courses = () => {
    const [courses, setcourses] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
        .then(data => setcourses(data))
            
    },[])
    return (
        <div>
            <Row>
                {
                    courses.map(course =>
                        <Col md={4} > <Course Course={course} className="" ></Course>  </Col>)
                }
            </Row>
            
        </div>
    );
};

export default Courses;