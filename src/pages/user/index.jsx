import "./style.scss";
import React from 'react';
import { saveProfile } from './saveprofile';
import {setProfile} from './setprofile'
 

export class User extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      issaveprofile: true
    };
  }
  render() {
    return (
      <div className="">
        <div className="">
              <saveProfile />
              {/* <setProfile /> */} 
        </div>
      </div>
    );
  }
}
