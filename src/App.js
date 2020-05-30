import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import {Progress} from 'reactstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { BoxLoading } from 'react-loadingg';
import { Line, Circle } from 'rc-progress';
import 'rc-progress/assets/index.css';

class App extends Component {

    state = {
      translated: null,
      selectedFile: null,
      transcription: null,
      loaded: 0,
      waiting: false,
    };

    onFileChange = event => {
      this.setState({selectedFile: event.target.files[0]});
      this.setState({transcription: null, translated: null, loaded: 0,waiting: false,})
    };

    onFileUpload = () => {
      this.setState({waiting: true})
      const formData = new FormData();
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      console.log(this.state.selectedFile);

      axios.post("https://europe-west3-it-app-cpm.cloudfunctions.net/api/uploadSample", formData, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
          })
        },
      }).then((response) => {
        // console.log(response.data.data.transcription);
        this.setState({transcription: response.data.data.transcription})
        console.log(this.state.transcription)
        this.setState({translated: true, waiting: false})
      }, (error) => {
        // console.log(error);
        this.setState({transcription: 'error'})
      });
    };

    fileData = () => {
      if (this.state.translated) {
        return (
          <div>
            <div class="transcription">
              {this.state.transcription}
            </div>
          </div>
        );
        } 
      if (this.state.waiting){
        return (
          <div>
            <div class="transcription">
            <BoxLoading />
            </div>
          </div>
        );
      }
      return (
        <div>
          <div class="transcription">
          </div>
        </div>
      );
    };

    render() {
      return (
        <div>
          {/* <Line percent={Math.round(this.state.loaded,2)} strokeWidth="4" strokeColor="#D3D3D3" /> */}
        {/* <div>
            <ProgressBar now={Math.round(this.state.loaded,2)} />
          </div> */}
            <div>
            <div class="upload">
              <input type="file" name='file' onChange={this.onFileChange} />
              <Button 
                disabled={!this.state.selectedFile}
                variant="contained"
                color="default"
                // className={classes.button}
                startIcon={<CloudUploadIcon />}
                onClick={this.onFileUpload}
              >
                Upload
              </Button>
              </div>
              {/* <div class="form-group">
                <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) } %</Progress>
              </div> */}
                <div class="progress">
                  <Line percent={Math.round(this.state.loaded,2)} strokeWidth="1" strokeColor="#0f70d1" />
                </div>
            </div>
          {this.fileData()}
          {/* <ProgressBar animated now={45} /> */}
        </div>
      );
    }
  }

export default App;
