import Button from "@material-ui/core/Button";
import React from "react";
import classes from "./design.module.css";

export default function AddTodoButton() {
  return (
    <div>
      <Button
        variant="contained"
        style={{ marginLeft: "50rem", fontSize: "large", fontWeight: "bold" }}
        color="primary"
      >
        Add ToDO
      </Button>
    </div>
  );
}
