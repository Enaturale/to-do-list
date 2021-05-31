import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./index.css";

class AddTodo extends React.Component {

  state = {
    title: ""
  }

  add =(e) =>{
    e.preventDefault();
    if (this.state.title === ""){
      alert("Enter the title of the todo item");
      return;      
    } 
    // this.props.addListHandler(this.state); 
    // this.setState({title: ""})
    // console.log(this.state);
    this.props.history.push("/");
  }
    
 render(){
  return (
    <div className="addtodoItem">
      <h2>New Todo Item</h2>

      <form onSubmit = {this.add}>
        <div style={{ marginLeft: "4rem", marginBottom: "2rem" }}>
          <label
            style={{
              marginRight: "1rem",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value = {this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            style={{ height: "30px", width: "260px" }}
          ></input>

          <Button
           
            variant="contained"
            color="primary"
            onClick ={this.add}
            style={{
              marginLeft: "2rem",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
}

export default AddTodo;
