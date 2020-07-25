import React from 'react';
import './style.scss';
import ProfileImage from '../../assets/image/profile.svg';
import { Container, Row,Col,Image,Dropdown,DropdownButton, Button } from 'react-bootstrap';


export class Profile extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        Name:"shubham kumawat",
        Email:"Xyz@mail.com",
        Phone:"+91 xxxxx xxxxx",
        Gender:"male",
        Age:"25",
        Addressl1:"45,Radhaswami Nagar ",
        Addressl2:"indore MP (452001)"
        
      };
    }
    render() {
        return (            
            <div className="wrapper">
            <div className="left">
                <Image src={ProfileImage} className="image" alt="Logo"/>
                <h4>{this.state.Name}</h4>

            </div>
            <div className="right">
                <div className="info">
                    <h3>Information</h3>
                    <div className="info_data">
                        <div className="data">
                            <h4>Email</h4>
                            <p>{this.state.Email}</p>
                         </div>
                         <div className="data">
                           <h4>Phone</h4>
                            <p>{this.state.Phone}</p>
                        </div>
                    </div>
                    <div className="info_data">
                        <div className="data">
                            <h4>Gender</h4>
                            <p>{this.state.Gender}</p>
                         </div>
                         <div className="data">
                           <h4>Age</h4>
                            <p>{this.state.Age} yr</p>
                        </div>
                    </div>
                </div>
              
              <div className="Address">
                    <h3>Address</h3>
                    <div className="data">
                        <h4>{this.state.Addressl1}</h4>
                        <p>{this.state.Addressl2}</p>
                    </div>
                    <Button>Edit Profile</Button>
                </div>
            </div>
        </div>

        );
    }
  }
  
  