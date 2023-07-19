import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";

function Comments() {
  return (
    <>
      <section id="contact" className="bg-light py-3 ">
        <div className="text-center my-1 py-3">
          <h2 className=" text-primary">
            {" "}
            Comments <i class="bi bi-chat-left-heart"></i>
          </h2>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i class="bi bi-envelope-open"></i>
                  </InputGroup.Text>
                  <FloatingLabel controlId="floatingInput" label="Email ">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i class="bi bi-file-earmark-person-fill"></i>
                  </InputGroup.Text>
                  <FloatingLabel controlId="floatingInput" label="Name">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </InputGroup>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Comments;
