import React from 'react';
import closeButton from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react"
import { useNavigate } from 'react-router';
import "../style/test.css";

const Homee = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (


 
    
    <>
     
      <div className='viewPost' onClick={handleShow}>View Post</div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className='xbutton' closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default Homee