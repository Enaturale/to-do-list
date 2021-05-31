import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import TodoCard from "./Todocard"
import AddTodoButton from "./layout/AddTodoButon";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

//importing material ui for animations
import { CircularProgress } from "@material-ui/core";

const Todos = () => {
  <AddTodoButton />
  //creating a state variable for our todos
  const [todos, setTodos] = useState();
  
    //fetching the to-do list from the placeholder using axios
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <>
    <Link to ="/addtodo" style={{textDecoration:'none'}}>
    <Button
        variant="contained"
        style={{ marginLeft: "50rem", fontSize: "large", fontWeight: "bold" }}
        color="primary"
      >
        Add ToDO
      </Button>
      </Link>

      {todos ? (
        <div className = 'listOrder'>
            {/*limiting the items in the to-do list to 10 */}
          {todos.slice(0, 10).map((todo) => 
          <TodoCard todo={todo} />)}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
