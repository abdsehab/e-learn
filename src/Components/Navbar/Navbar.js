import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="justify-content-center">
            <Nav className="justify-content-center bg-light p-4">
                <NavLink to="/home"
                    activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                    }} className="mx-4 text-decoration-none fs-4">Home
                </NavLink>

                
                
                <NavLink to="/courses" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                }} className="mx-4 text-decoration-none fs-4">Courses</NavLink>


                <NavLink to="/about" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                }} className="mx-4 text-decoration-none fs-4">About Us</NavLink>


                <NavLink to="/contact" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                }} className="mx-4 text-decoration-none fs-4">Contact US</NavLink>
                
                
            </Nav>

         
        </div>
    );
};

export default Navbar;