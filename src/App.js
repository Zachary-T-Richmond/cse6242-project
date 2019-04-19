import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Results from './components/Results';
import NavBar from './components/NavBar';

import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';




const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});


class CheckboxesGroup extends Component {
  state = {
    show: true,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    data: null
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  hide = () => {
    this.setState({show: false})
  }
  render() {
    const { classes } = this.props;
    console.log(this.props)
    const { one, two, three, four, five, six, seven, eight, nine } = this.state;
    const error = [one, two, three, four, five, six, seven, eight, nine].filter(v => v).length >= 3;
    return (
      <Router>
          <NavBar/>
          {this.state.show ? <div>
              <Grid container spacing={24}><Grid item xs></Grid><Grid item xs><Paper>
                    <FormControl component="fieldset" className={classes.formControl}>
                      <FormLabel component="legend">Please Select From the Below Options:</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox checked={one} onChange={this.handleChange('one')} value="one" />}
                          label="Statement One"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={two} onChange={this.handleChange('two')} value="two" />}
                          label="Statement Two"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={three} onChange={this.handleChange('three')} value="three" />}
                            label="Statement Three"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={four} onChange={this.handleChange('four')} value="four" />}
                          label="Statement Four"
                        />
                      </FormGroup>
                      <Button component={Link} to="/results" variant="contained" color="secondary" onClick={this.hide}>Submit</Button>
                    </FormControl>
                  </Paper></Grid><Grid item xs></Grid></Grid>
          </div> : null}
          <Route exact path="/results" component={Results} />

      </Router>
    );
  }
}

export default withStyles(styles)(CheckboxesGroup);
