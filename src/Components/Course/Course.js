import React from 'react';
import "./Course.css"


const Course = (props) => {
    const { course_name, price, thumbnail } = props.Course;
    return (
        <div className="course-box" >
            <img src={thumbnail} alt=""  width="150px"/>
            <h1>Course Name:{course_name} </h1>
            <h3>Price:{price} </h3>
        </div>
    );
};

export default Course;