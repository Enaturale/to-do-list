import React, {useState} from "react";
import "./index.css";
import {useHistory} from "react-router-dom";
import Modal from "./layout/modal";
import Backdrop from "./layout/backdrop";


const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  let history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //function to handle the delete button when clicked
  function deleteHandler(){
    console.log("Delete button clicked");
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className = 'todoWrapper'>
    <div onClick={() => history.push(`/todo/${id}`)} className = 'card'>
      <h4 style ={{paddingTop: '30'}}> {title}</h4>
      <h6>{`Completed: ${completed} `} </h6>      
    </div>
    <div>
        <button className= 'btn' onClick = {deleteHandler}>Delete</button>
    </div>

    {/* introducing the modal to the todo listpage */}
    {modalIsOpen && (<Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler} />)}
    {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default TodoCard;
