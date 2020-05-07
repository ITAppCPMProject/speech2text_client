import React from "react";
import Button from "@material-ui/core/Button";

const Mybutton = () => {
  return (
    <Button variant="contained" component="label">
      Upload File
      <input type="file" style={{ display: "none" }} />
    </Button>
  );
};

export default Mybutton;
