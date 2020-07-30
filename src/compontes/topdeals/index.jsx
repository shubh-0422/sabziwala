import React from "react";
import "./style.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Veg from "../../assets/image/vegetable.svg";

export class Topdeals extends React.Component {
  render() {
    return (
      <Container>
        <Col className="bestseller">
          <Row>
            <div className="title">Bestseller</div>
          </Row>
          <Row className="card">
            <Col xl={4}>
              <Cart />
            </Col>
            <Col xl={4}>
              <Cart />
            </Col>
            <Col xl={4}>
              <Cart />
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
function Cart() {
  return (
    <Container>
      <Col className="card-item">
        <Row className="imgBX">
          <Image
            className="Image"
            src={Veg}
            className="item-image"
            alt="Logo"
          />
        </Row>
        <Row className="contentBX">
          <h2>Fruits Name</h2>
          <Row className="quantity">
            <h3>Quantity :</h3>
            <span>0.5 Kg</span>
            <span>1 Kg</span>
            <span>2 Kg</span>
          </Row>
          <Row className="Price">
            <h3>Price :</h3>
            <span>Rs 50</span>
          </Row>
          <Row>
            <Col>
              <Button>Buy Now</Button>
            </Col>
            <Col>
              <Button>Add Cart</Button>
            </Col>
          </Row>
        </Row>
      </Col>
    </Container>
  );
}
