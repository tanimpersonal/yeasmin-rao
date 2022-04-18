import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "./Contact.css";
const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    toast("Your Quote Sent! Please allow some time to operate", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="d-flex contact-container justify-content-center">
      <div className="form">
        <Form onSubmit={handleContact}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>
              Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="Name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email address <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>
              Subject <span className="text-danger">*</span>
            </Form.Label>
            <br />
            <textarea
              required
              placeholder="Enter your subject"
              className="text-area"
              cols={40}
            ></textarea>
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default Contact;
