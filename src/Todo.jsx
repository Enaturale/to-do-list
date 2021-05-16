import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodos = res.data;
        setTodoDetails(responseTodos);
      });
  }, []);

  const { id:todoId, userId, title, completed } = todoDetails || {};

  return (
    //   <p>{`This id the TODO component and the TODO ID is: ${id}`}</p>;
    <div>
      {todoDetails ? (
        <div className = 'singleTodo'>
          <h1>{`Todo id : ${todoId}`}</h1>
          <h1>{`Todo userId : ${userId}`}</h1>
          <h1>{`Todo Title : ${title}`}</h1>
          <h1>{`Todo Completed: ${completed}`}</h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
