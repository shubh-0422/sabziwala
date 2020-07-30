import "./style.scss";
import React from 'react';
import {SaveProfile} from './saveprofile';
import {SetProfile} from './setprofile';
import { Button } from "react-bootstrap";


export class User extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      issaveprofile: true
    };
  }

  componentDidMount() {
    //Add .right by default
    // this.rightSide.classList.add("right");
  }

  changeState() {
    const { issaveprofile } = this.state;
    this.setState(prevState => ({ issaveprofile: !prevState.issaveprofile }));
  }

  render() {
    const { issaveprofile } = this.state;
    const current = issaveprofile ? "Edit Profile" : "Save Profile";
    const currentActive = issaveprofile ? "Save Profile" : "Edit Profile";
    return (
      <div className="App">
        <div className="SaveProfilepage">
          <div className="containerpage" ref={ref => (this.container = ref)}>
            {issaveprofile && (
              <SaveProfile containerRef={ref => (this.current = ref)} />
              
            )}
            {!issaveprofile && (
              <SetProfile containerRef={ref => (this.current = ref)} />
            )}
            <SaveButton
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
            
          </div>
        </div>
      </div>
    );
  }
}

const SaveButton = props =>{
  return  <div>
    <Button className="btn" ref ={props.containerRef} onClick={props.onClick} >{props.current}</Button></div>
   

}