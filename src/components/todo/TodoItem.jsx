import React, { Component } from "react";
import { AiFillEdit, AiOutlineCheck } from "react-icons/ai";

export class TodoItem extends Component {
  render() {
    const { id, title, doneTodo, editTodo } = this.props;
    return (
      <div className="todo p-3 d-flex justify-content-between align-items-center border mb-3">
        <span>{title}</span>
        <div>
          <button className="btn btn-primary me-3" onClick={() => editTodo(id)}>
            <AiFillEdit />
          </button>
          <button  className="btn btn-success" onClick={() => doneTodo(id)}>
            <AiOutlineCheck />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
