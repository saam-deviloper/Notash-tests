import React, { useEffect, useState } from "react";
import { Button, Card, Container, Placeholder } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export default function Home() {
  const [state, setState] = useState(false);
  const [timer,setTimer]=useState({date:'',time:''});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user)
      setState(true)
      else
      setState(false)
    });
    setInterval(()=>{
      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();
      setTimer({date:date,time:time})
    },1000)
  }, []);

  useEffect(()=>{
    return()=>{
      if('caches' in window){
        caches.keys().then((names) => {
                // Delete all the cache files
                names.forEach(name => {
                    caches.delete(name);
                })
            });
    
            // Makes sure the page reloads. Changes are only visible after you refresh.
            window.location.reload(true);
        }
    }
  },[])
  return (
    <>
      <Container>
        <h1 className="display-6 mt-5 text-center">
          {state ? "Local Date and Time ":"Login to your account to see the Clock"}
        </h1>
        <div className="d-flex justify-content-around align-content-center">
          {state ? (
            <Card style={{ width: "20rem",padding:'1rem' }} className="shadow mt-5">
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Current Time</Card.Title>
                <Card.Text>
                {`Today's date is: ${timer.date}`}<br/>
                {`Today's time is: ${timer.time}`}

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          ) : (
            <Card style={{ width: "18rem" }} className="shadow mt-5">
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />
                  <Placeholder xs={4} /> <Placeholder xs={6} />
                  <Placeholder xs={8} />
                </Placeholder>
                {/* <Placeholder.Button variant="primary" xs={6} /> */}
              </Card.Body>
            </Card>
          )}
        </div>
      </Container>
    </>
  );
}
