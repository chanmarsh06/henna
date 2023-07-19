import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap';


function Order() {
  return (
    <>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Marriage Function</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            5
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Wedding</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            3
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Encagement</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            8
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default Order