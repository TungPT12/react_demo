import React, { Component } from "react";
import SubmitButton from "./button";
import TextField from "@atlaskit/textfield";
export default class Form extends Component {
  constructor(props){
    super(props);
  console.log("constructor");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <>
        <TextField name="txtInput" elemAfterInput={<SubmitButton />} />
      </>
    );
  }
}
