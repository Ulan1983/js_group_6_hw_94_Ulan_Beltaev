import React, {Component, Fragment} from 'react';

import Routes from "./Routes";
import {ToastContainer} from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/UI/Toolbar/AppToolbar";

class App extends Component {
  render() {
    return (
        <Fragment>
          <CssBaseline/>
          <ToastContainer autoClose={2000} />
          <AppToolbar/>
          <Container maxWidth="xl">
            <Routes/>
          </Container>
        </Fragment>
    );
  }
}

export default App;
