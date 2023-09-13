import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HennaCard from './HennaCard';

const Menu = () => {

    // array
    // const [menu]= useState([1,2,3,4,5,6]);
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-3 py-5">
            In love with the timeless elegance of mehndi designs
          </h3>
          <Row>
            <Col >
              <HennaCard />
            </Col>

            {/* {
                menu.map((item)=>{
                    return (
                      <Col md={6} lg={4} key={item}>
                        <HennaCard />
                      </Col>
                    );
                })
            } */}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Menu