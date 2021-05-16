import classes from './design.module.css';

function Modal(props){
    function cancelButton(){
        props.onCancel();
    }

    function confirmButton(){
        props.onConfirm();
    }

    return(
        <div className = {classes.modal}>  
            <p style = {{fontSize: '30px'}}>Hey, are you sure?</p>
            <button onClick ={cancelButton} className = {classes.btnAlt}>Cancel</button>
            <button className = {classes.btn} onClick ={confirmButton}>Confirm</button>
        </div>
    );
};

export default Modal;