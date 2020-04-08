import React from "react";
import { isThisTypeNode } from "typescript";

export default class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: {
        value: "",
        error: false
      }
    };
  }

  changeHandler = e => {
    this.setState({
      searchField:{
        ...this.state.searchField,
        value: e.target.value,
        error: false
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if(this.state.searchField.value !== ""){
      this.props.getGif(this.state.searchField.value);
    } else {
      this.setState({
        searchField:{
          ...this.state.searchField,
          error: true
        }
      })
    }
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.searchField.value}
          onChange={this.changeHandler}
          className={this.state.searchField.error ? "error" : ""}
        />
        <input type="submit" value="Search" className="searchbtn" />
      </form>
    );
  }
}
