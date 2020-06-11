import React from "react";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => {
  return (
    <div className="container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
