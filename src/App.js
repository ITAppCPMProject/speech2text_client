import React from "react";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./theme";
import Navbar from "./Navbar";
import Body from "./Body";

const theme = createMuiTheme(themeFile);

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Body />
      </MuiThemeProvider>
    );
  }
}

export default App;
