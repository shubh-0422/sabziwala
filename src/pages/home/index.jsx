import "./style.scss";
import React from 'react';
import { Container, Row,Col,Image,Dropdown,DropdownButton } from 'react-bootstrap';
import Veg from '../../assets/image/vegetable.svg';
import Search from "../../compontes/search";
import {Topdeals} from "../../compontes/topdeals";

export class Home extends React.Component{

  render() {
      return (
      
            <Container fluid={true}>
            <Col>
                <Row className="home-title" >
                    <Col xl={8} className="heading">
                        <p>
                            Buy fresh fruits <span>& vegitable</span>
                            <Search />
                        </p>
                    </Col>               
                    <Col xl={4}>
                        <Image src={Veg} className="image" alt="Logo"/>
                    </Col>
                </Row>
                <Row>
                  <Col>
                    <Topdeals />
                  </Col>
                </Row>
              </Col>
          </Container>
            );
  }
}
