import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar,Button } from "react-bootstrap";
//helper
import splitter from "../Helper/splitter";
//firebase
import { auth } from "../Firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
//logo
import logo from '../logo.svg';

export default function Header() {
  //navigation
  const navigate = useNavigate();
  //user isLogged in?
  const [id, setId] = useState(null);
  let result;
  useEffect(()=>{
    result = onAuthStateChanged(auth,(user) => {
      if (user){
        setId(splitter(user.email));
      }
    });
  },[result])
    
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="" onClick={() => navigate("/")}>
            <img src={logo}/>
            Notash
          </Navbar.Brand>
          <Nav className="me-0">
            {/* <Nav.Link href="#"><Link to={'/'}>Home</Link></Nav.Link> */}
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Nav.Link
              href="#"
              className="me-auto"
              onClick={() => {
                navigate("/login");
              }}
            >
              {id ? <Button variant="outline-light" 
              onClick={()=>{auth.signOut();setId('')}}
              >hi {id}</Button> :"signUp/signIn"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
