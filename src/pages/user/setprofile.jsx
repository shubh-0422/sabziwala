import React from 'react';
import './style.scss';
import ProfileImage from '../../assets/image/profile.svg';
import { Container, Row,Col,Image,Dropdown,DropdownButton,Form, Button } from 'react-bootstrap';


export class setProfile extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        Name:"",
        Email:"",
        Contact:"",
        Gender:"",
        Age:"",
        Addressl1:"",
        Addressl2:""
        
      };
    }

    render() {
        return (            
            <div className="wrapper">
                    <div className="left">
                        <Form>
                        <Image src={ProfileImage} className="image" alt="Logo"/>
                        <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Select Image" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><h4>Name </h4></Form.Label>
                            <Form.Control type="str" placeholder="Your Name"  
                            value={this.state.Name}
                            onChange={event => {
                            this.setState({ Name: event.target.value });
                            }} />  
                        </Form.Group>
                        </Form>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>Information</h3>
                            <div className="info_data">
                                <div className="data">
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><h4>Email </h4></Form.Label>
                                    <Form.Control type="email" placeholder="Your Email"
                                    value={this.state.Email}
                                    onChange={event => {
                                    this.setState({ Email: event.target.value });
                                     }} />    
                                    </Form.Group>
                                 </div>
                                <div className="data">
                                     <Form.Group controlId="formBasicEmail">
                                    <Form.Label><h4>Contact No. </h4></Form.Label>
                                    <Form.Control type="number" placeholder="Your Contact No"
                                    value={this.state.Contact}
                                    onChange={event => {
                                    this.setState({ Contact: event.target.value });
                                     }} />  
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="info_data">
                                <div className="data">
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><h4>Gender </h4></Form.Label>
                                    <Form.Control type="text" placeholder="Your Gender"
                                    value={this.state.Gender}
                                    onChange={event => {
                                    this.setState({ Gender: event.target.value });
                                     }} />  
                                    </Form.Group>
                                 </div>
                                <div className="data">
                                     <Form.Group controlId="formBasicEmail">
                                    <Form.Label><h4>Age </h4></Form.Label>
                                    <Form.Control type="number" placeholder="Your Age"
                                    value={this.state.Age}
                                    onChange={event => {
                                    this.setState({ Age: event.target.value });
                                     }} />  
                                    </Form.Group>
                                </div>
                            </div>
                        </div>              
                        <div className="Address">
                            <h3>Address</h3>
                            <div className="data">
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="line 1" 
                                    value={this.state.Addressl1}
                                    onChange={event => {
                                    this.setState({ Addressl1: event.target.value });
                                     }}/>  
                                <Form.Control type="text" placeholder="line 2" 
                                    value={this.state.Addressl2}
                                    onChange={event => {
                                    this.setState({ Addressl2: event.target.value });
                                     }}/>  
                                </Form.Group>
                        </div>
                        
                        <div className="Address">
                            <h3>Password</h3>
                            <div className="data">
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control type="password" placeholder="Enter Password" />  
                                </Form.Group>
                            </div>
                        </div>
                        <Button onClick={() => this.save()}>Save Profile</Button>

                </div>
            </div>
        </div>
        
        );
    }
  }
  
