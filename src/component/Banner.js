import { Carousel } from 'react-bootstrap';
// import Carousel from "react-bootstrap/Carousel";
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../img/bg-henna-carousel.jpg'
import img2 from '../img/bg-henna-carousel-3.jpg'
import img3 from '../img/bg-henna-carousel-5.jpg'


export const Banner = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center align-item-center">
          <Col lg={8}>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  style={{ width: "90%" }}
                  className="d-block m-auto "
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Marriage Function</h3>
                  <p className="d-none d-sm-block">
                    Henna, happiness, and forever love.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  style={{ width: "95%" }}
                  className="d-block  m-auto"
                  src={img2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Encagemant</h3>
                  <p>A new journey begins with henna.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  style={{ width: "95%" }}
                  className="d-block m-auto "
                  src={img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Wedding Day</h3>
                  <p>Love, laughter, and mehendi magic.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="text-center">
          <h2 className="display-5 mt-3">
            Stunning mehendi for a beautiful bride
          </h2>
          <p className="lead text-muted">
            Every Love Story Is Beautiful, But Ours Is My Favourite!
          </p>
        </div>
      </Container>
    );
}
