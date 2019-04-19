import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <Router>
          <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit">
                Atlanta Livability Index
            </Typography>
            </Toolbar>
        </AppBar>
        <div>
            <NavBar/>
        </div>
      </Router>
    );
  }
}

export default App;
