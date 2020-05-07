import axios from "axios";

import React, { Component } from "react";

class Butt extends Component {
  state = {
    selectedFile: null
  };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();
    if (this.state.selectedFile == null) {
      return;
    }
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);
    axios.post("api/uploadfile", formData);
  };

  render() {
    return (
      <div>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
      </div>
    );
  }
}

export default Butt;
