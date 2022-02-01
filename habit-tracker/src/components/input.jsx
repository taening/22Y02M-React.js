import { type } from "@testing-library/user-event/dist/type";
import React, { Component, createRef } from "react";

class Input extends Component {
  formRef = createRef();
  inputRef = createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Input;
