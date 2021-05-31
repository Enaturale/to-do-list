import React from "react";
import './index.css';
import Todos from './Todos';
import Todo from './Todo';
import Designtodo from './layout/design'

//importing router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddTodoButton from "./layout/AddTodoButon";
import AddTodo from "./AddTodo";

export default function App() {
  return (
    <div className="App">
    {/* Adding the header from the layout folder and design js file */}
    <Designtodo />
    {/* <AddTodoButton /> */}
    
    {/* Enabling the route and switch between paths       */}    
     <Router>
       <Switch>
         <Route exact path ="/" children ={<Todos />} />
         <Route path="/todo/:id" children ={<Todo />} />
         <Route path = "/addtodo" component = {AddTodo} />
       </Switch>
     </Router>
    </div>
  );
}


