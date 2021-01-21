import React,{Component} from "react";
import {Link} from "react-router-dom"
import {Navbar,Nav,Button,Form} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faShoppingBag,faUser } from '@fortawesome/free-solid-svg-icons'

import "./navbar.css"

class TopNavBar extends Component{


    render(){
        return (
            <div >
      <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
              <div className="container-fluid">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
   <Link to="/" ><Navbar.Brand >Quaint</Navbar.Brand></Link>
   
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{"marginLeft":"30px"}} className="mr-auto">
     <Link to="/catalogue" > <Nav.Link href="/catalogue" >Hoodies</Nav.Link></Link>
     <Link to="/catalogue" ><Nav.Link href="/catalogue" >SweatShirts</Nav.Link></Link>
     <Link to="/catalogue" ><Nav.Link href="/catalogue" >Tops</Nav.Link></Link>
    </Nav>   
    </Navbar.Collapse>
   <Nav style={{"display":"inline"}}>
   <Link to="/cart">  <Nav.Link style={{"display":"inline","marginLeft":"10px"}} href="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Nav.Link></Link>
   <Link to="/profile">  <Nav.Link style={{"display":"inline","marginLeft":"10px"}} href="/profile"><FontAwesomeIcon icon={faUser}/></Nav.Link></Link>
   <Link to="/wishlist">  <Nav.Link style={{"display":"inline","marginLeft":"10px"}} href="/wishlist"><FontAwesomeIcon icon={faShoppingBag}/></Nav.Link></Link>  
    </Nav>
    </div>
  </Navbar>
  <br />
          </div>
        )
    }
}

export default TopNavBar