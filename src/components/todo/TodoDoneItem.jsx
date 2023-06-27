import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";

export class TodoDoneItem extends Component {
  render() {
    const { id, title, deleteTodo } = this.props;

    return (
      <div className="todo p-3 d-flex justify-content-between align-items-center border todo mb-3">
        <span>{title}</span>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          <AiFillDelete />
        </button>
      </div>
    );
  }
}

export default TodoDoneItem;
