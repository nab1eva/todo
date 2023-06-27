import { Component, Fragment } from "react";
import { ToastContainer } from "react-toastify";

import Todo from "./components/todo";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer position="bottom-right" autoClose={1000} />
        <Todo />
      </Fragment>
    );
  }
}

export default App;
