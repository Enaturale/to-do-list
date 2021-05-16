import classes from './design.module.css';

function Backdrop (props) {
    return <div className = {classes.backdrop} onClick={props.onCancel} />;
}

export default Backdrop;