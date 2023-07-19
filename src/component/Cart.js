import React, { useState } from 'react'

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Order from './Order';

function Cart() {
    const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="light"
        onClick={() => {
          setShow(!show);
        }}
        className="me-2  position-relative"
      >
        <i class="bi bi-bag-check"></i>{" "}
        <span class="position-absolute top-0 start-100 translate-middle sm-badge badge rounded-pill bg-danger">
          15+
          <span class="visually-hidden">unread messages</span>
        </span>
      </Button>
      <Offcanvas
        show={show}
        onHide={() => {
          setShow(!show);
        }}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Orders:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Order />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart