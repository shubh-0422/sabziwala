import "./style.scss";
import React from 'react';
import { Container, Row,Col,Image,Dropdown,DropdownButton } from 'react-bootstrap';
import Veg from '../../assets/image/vegetable.svg';
import Search from "../../compontes/search";
import {Topdeals} from "../../compontes/topdeals";

export class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  render() {
      return (
      
            <Container fluid={true}>
            <Col>
                <Row className=" jumbo home-title" >
                    <Col className="heading">
                        <p>
                            Buy fresh fruits <span><br></br>& vegitable</span>
                            <Search />
                        </p>
                    </Col>               
                    <Col>
                        <Image src={Veg} className="image" alt="Logo"/>
                    </Col>
                </Row>
                <Row>
                  <Topdeals />
                </Row>
            </Col>
          </Container>
          
          
            );
  }
}
