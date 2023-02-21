import React, { useEffect, useRef } from "react";
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    const headerRef = useRef(null);
    const headerFunc = () => {
        if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
            headerRef.current.classList.add('stick__header')
        } else {
            headerRef.current.classList.remove('stick__header')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc)
        return () => window.removeEventListener('scroll', headerFunc)
    }, [])


    return (
        <>
            <Navbar bg="light" expand="lg" ref={headerRef}>
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="logo">
                            <div className="logo__img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>Fitbody</h2>
                        </div>
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center m-auto ps-md-5">
                        <Nav className="me-auto gap-md-5 nav__item">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#schedule">Schedule</Nav.Link>
                            <Nav.Link href="#classes">Classes</Nav.Link>
                            <Nav.Link href="#pricing-plan">Pricing</Nav.Link>
                            <Nav.Link href="#testimonials">Coaches</Nav.Link>
                            <Nav.Link href="#footer">About Us</Nav.Link>

                        </Nav>

                        <div className="nav__right">

                            <Button variant="primary" className="register__btn">Register</Button>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )



};
export default Header;