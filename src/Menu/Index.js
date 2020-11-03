import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './MenuStyle.css'
import Logotipo from '../Images/logo-sul-Aquecedores.png'
import NavId from './texts.json'

function Menu() {
    return (
        <Navbar className="NavBar" bg="light" expand="lg" sticky="top"  >
            <img src={Logotipo} width="200px"></img>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto mx-auto nb-contespaco">
                    <Nav.Link  href="#Home">{NavId.id.home}</Nav.Link>
                    <Nav.Link  href="#Produtos">{NavId.id.products}</Nav.Link>
                    <Nav.Link  href="#AssistenciaTecnica" >{NavId.id.assistence}</Nav.Link>
                    <Nav.Link  href="#Contato">{NavId.id.contact}</Nav.Link > 
                    <Nav.Link id="numero" href="">FONE: {NavId.id.numeroTel}</Nav.Link >          
                </Nav>
            </Navbar.Collapse>
           
        </Navbar>
        
    )
}
export default Menu
