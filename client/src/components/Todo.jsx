import React, { useState } from "react";
import UserInfo from "./UserInfo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    todo: "",
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col m3 s12">
          <UserInfo />
        </div>
        <div className="col m9 s12"></div>
      </div>
    </div>
  );
};

export default Todo;
