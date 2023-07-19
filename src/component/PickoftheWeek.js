import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
//TOAST 
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function PickoftheWeek() {

  const [show, setShow] = useState(false);

  return (
    <section id="musttry" className="my-2 ">
      <div className="text-center py-3 my-4">
        <h2 className="display-5 text-primary">
          <i class="bi bi-search-heart"></i> Pick Of The Week!
        </h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <img
              rounded
              roundedCircle
              src={require("../img/bg-henna-s2.webp")}
              //   className="w-75"
              fluid="true"
              alt=""
            />
          </Col>
          <Col md={5}>
            <div className="p-3">
              <h2 className="h1">Weddings are incomplete without mehndi</h2>
              <p className="lead text-muted">
                Mehndi is necessary, whether it is an Indian wedding, a festival
                at home, or just casual doodling on your hand.
              </p>
              <Button
                className="text-white btn-outline-success text-center"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i class="bi bi-bag-check-fill"></i> Order Now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="p-3 position-fixed end-0 bottom-0"
          position={"bottom-end"}
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => {
              setShow(false);
            }}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Your Order Is Placed</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
}
export default PickoftheWeek