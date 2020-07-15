import React from 'react';
import './style.scss';
import {Container,Row,Col,Image, Button} from 'react-bootstrap'
import Veg from '../../assets/image/vegetable-icons.svg';

export class Topdeals extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  render() {
      return (

          <Container className="bestseller">
            <Row>
              <Row xl={2}>
                <div className="title">Bestseller</div>
              </Row>
              <Row xl={10} item>
              <Col xl={3} >
                  <Cart />
                </Col>
                <Col xl={3} >
                  <Cart />
                </Col>
                <Col  xl={3} >
                  <Cart />
                </Col>
                <Col xl={3} >
                  <Cart />
                </Col>
              </Row>            
            </Row>
          </Container>
          );
  }
}
function Cart(){
  return(<Col className="card">
  <Row className="imgBX">
    <Image className="Image" src={Veg} className="item-image" alt="Logo"/>
  </Row>
  <Row className="contentBX">
      <h2>Fruits Name</h2>
  </Row>
  <Row className="quantity">
    <h3>Quantity :</h3>
    <span>0.5 Kg</span>
    <span>1 Kg</span>
    <span>2 kKg</span>
    <span>5 Kg</span>
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
</Col>)
}