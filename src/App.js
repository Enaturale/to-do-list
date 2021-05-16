import React from "react";
import './index.css';
import Todos from './Todos';
import Todo from './Todo';
import Designtodo from './layout/design'

//importing router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
    <Designtodo />
     <Router>
       <Switch>
         <Route exact path ="/" children ={<Todos />} />
         <Route path="/todo/:id" children ={<Todo />} />
       </Switch>
     </Router>
    </div>
  );
}


