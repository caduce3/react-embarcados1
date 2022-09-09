import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Header.css'

function Header() {
    return (
        <header>
            <Nav variant="tabs" className="justify-content-center pt-3" id="navbar">
                <Nav.Item>
                    <Nav.Link  className='links'>INÍCIO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className='links'>PROJETO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='links'>BOTÕES</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}

export default Header