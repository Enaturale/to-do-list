import React, { useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import Modal from "./layout/modal";
import Backdrop from "./layout/backdrop";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  let history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //function to handle the delete button when clicked. To open the options for confirm and cancel buttons
  function deleteHandler() {
    console.log("Delete button clicked");
    setModalIsOpen(true);
  }

  //function to handle the closing on the modal when the backdrop or buttons on the modal are tapped
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  //the card which returns each to-do on the list.
  return (
    <div className="todoWrapper">
      <div onClick={() => history.push(`/todo/${id}`)} className="card">
        <h4 style={{ paddingTop: "30" }}> {title}</h4>
        <h6>{`Completed: ${completed} `} </h6>
      </div>
      <div>
        {/* <button className= 'btn' >Delete</button> */}
        <EditIcon color="primary" style={{ marginTop: "10px", marginLeft: '30rem', color: '#1520A6', }} />
        <DeleteForeverOutlinedIcon  onClick={deleteHandler} style ={{color: 'firebrick'}}/>

        {/* <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={deleteHandler}
          style={{ marginTop: "10px", marginLeft: "50px" }}
        >
          Delete
        </Button> */}
      </div>

      {/* introducing the modal to the todo listpage */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default TodoCard;
