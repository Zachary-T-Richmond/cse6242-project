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
    data:[
      { label: 'CRM', value: 1 },
      { label: 'API', value: 1 },
      { label: 'Data', value: 1 },
      { label: 'Commerce', value: 1 },
      { label: 'AI', value: 3 },
      { label: 'Management', value: 5 },
      { label: 'Testing', value: 6 },
      { label: 'Mobile', value: 9 },
      { label: 'Conversion', value: 9 },
      { label: 'Misc', value: 21 },
      { label: 'Databases', value: 22 },
      { label: 'DevOps', value: 22 },
      { label: 'Javascript', value: 23 },
      { label: 'Languages / Frameworks', value: 25 },
      { label: 'Front End', value: 26 },
      { label: 'Content', value: 26 }
    ]
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  hide = () => {
    this.setState({show: !this.state.show})
  }
 
  render() {
    const { classes } = this.props;
    const { one, two, three, four, five, six, seven} = this.state;

    return (
      <Router>
          <NavBar/>
          {this.state.show ? <div>
              <Grid container spacing={24}><Grid item xs></Grid><Grid item xs><Paper>
                    <FormControl component="fieldset" className={classes.formControl}>
                      <FormLabel component="legend">Please Check the box if the statement is TRUE:</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox checked={one} onChange={this.handleChange('one')} value="one" />}
                          label="I consider myself a worrier."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={two} onChange={this.handleChange('two')} value="two" />}
                          label="I visit the park at least once a month."
                        />
                        <FormControlLabel
                            control={<Checkbox checked={three} onChange={this.handleChange('three')} value="three" />}
                            label="I am a smoker."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={four} onChange={this.handleChange('four')} value="four" />}
                          label="I am easily frustrated."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={five} onChange={this.handleChange('five')} value="five" />}
                          label="I have children in school."
                        />
                        <FormControlLabel
                            control={<Checkbox checked={six} onChange={this.handleChange('six')} value="six" />}
                            label="I often work extra hours."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={seven} onChange={this.handleChange('seven')} value="seven" />}
                          label="I prefer variety to routine."
                        />
                      </FormGroup>
                      <Button 
                      component={Link} to="/results" 
                      variant="contained" color="secondary" onClick={this.hide}>Submit</Button>
                    </FormControl>
                  </Paper></Grid><Grid item xs></Grid></Grid>
          </div> : null}
          {!this.state.show ?<div>
            <Grid container spacing={24}><Grid item xs></Grid><Grid item xs><Paper>
            <Button component={Link} to="/"
                variant="contained" color="secondary" onClick={this.hide}>Back</Button>
                <Route exact path="/results" render={ (props) => <Results {...props} allData = {this.state} /> } />
                </Paper></Grid><Grid item xs></Grid></Grid>   
          </div> : null}
      </Router>
    );
  }
}

export default withStyles(styles)(CheckboxesGroup);
