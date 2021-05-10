import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class Navigation extends Component{
    render(){
        return(              
            <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Web developer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#about_me">About me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#projects">Contact me</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation