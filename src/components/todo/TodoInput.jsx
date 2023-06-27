import React, { Component, createRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export class TodoInput extends Component {
  inputRef = createRef();
  toggleMode = () => {
    document.body.classList.toggle("dark");
  };
  render() {
    const { todo } = this.props;
    const submit = (e) => {
      e.preventDefault();
      this.props.getValue(this.inputRef.current.value);
      this.inputRef.current.value = "";
    };
    this.inputRef.current && (this.inputRef.current.value = todo);
    return (
      <Form onSubmit={submit}>
        <InputGroup className="my-3 w-50 m-auto">
          <Form.Control
            ref={this.inputRef}
            placeholder="..."
            aria-label="..."
            className="input"
          />
          <Button className="btnn" type="submit" variant="outline-success">
            {todo ? "Save" : "add"}
          </Button>
          <div class="switch" onClick={this.toggleMode}>
            <input type="checkbox"></input>
          </div>
        </InputGroup>
      </Form>
    );
  }
}

export default TodoInput;
