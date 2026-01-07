import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/header-img-2.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      // Logic: If user types, reset the button and clear status messages
      if (buttonText !== "Send") setButtonText("Send");
      if (status.message) setStatus({});

      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom Validation: Check if at least Email or Phone is provided
    if (!formDetails.email && !formDetails.phone) {
      setStatus({ success: false, message: "Please provide either an email address or a phone number." });
      return;
    }

    setButtonText("Sending...");

    emailjs.send(
        'service_un7awpq', 
        'template_hrec30n', 
        formDetails, 
        '7KmXIJmjG9QtIKAi7'
    )
    .then((result) => {
        setButtonText("Message Sent Successfully");
        setFormDetails(formInitialDetails);
        
    }, (error) => {
        setButtonText("Message Failed to Send");
        setStatus({ success: false, message: 'Please try again later or contact manually.' });
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" required value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      {/* Fixed typo: lastName */}
                      <input type="text" required value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      {/* Removed 'required' here to handle "Email OR Phone" logic in handleSubmit */}
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" required value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                  {
                      status.message &&
                      <Row>
                        
                        <p className={status.success === false ? "danger" : "success"} id="status">{status.message}</p>
                      </Row>
                    }
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}