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
    winner: null,
    show: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    // 6: false,
    // 7: false,
    data: [
      {
          "index":0,
          "name": "Alpharetta",
          "color": "#d32f2f",
          "radius": 45,
          "tooltip": "LFI: 35",
          "factors": [1,1,1,1,5]
      },
      {
          "index":1,
          "name": "Auburn",
          "color": "#d32f2f",
          "radius": 45,
          "tooltip": "LFI: 30",
          "factors": [2,2,2,2,4]
      },
      {
          "index":2,
          "name": "",
          "color": "#00bcd4",
          "radius": 10,
          "tooltip": "Brookhaven LFI: 25",
          "factors": [3,3,3,3,3]
      },
      {
          "index":3,
          "name": "",
          "color": "#00bcd4",
          "radius": 10,
          "tooltip": "Buckhead LFI: 20",
          "factors": [5,5,5,5,2]
      },
      {
        "index":3,
        "name": "",
        "color": "#00bcd4",
        "radius": 10,
        "tooltip": "East Atlanta LFI: 15",
        "factors": [6,6,6,6,1]
    }
  ]
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked}, ()=>{
        let whatHasBeenSelected = Object.keys(this.state)
          .map(x => Number(x))
          .filter(t=>{
            if(!isNaN(t)){
              return t
            }
          })
          .filter(y => this.state[y])
        console.log(whatHasBeenSelected)  
        let totalFactorSelected = 35/ whatHasBeenSelected.length  
        console.log(totalFactorSelected)
        let tempData = this.state.data
    }
    );

  // afterSetStateFinished =() => {
  //     console.log(whatHasBeenSelected)
  // }
    
    // let mydata = this.state.data
    // mydata.forEach(city =>{
    //   console.log(city)
    // })
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
                          control={<Checkbox checked={one} onChange={this.handleChange(1)} value="1" />}
                          label="I consider myself a worrier."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={two} onChange={this.handleChange(2)} value="2" />}
                          label="I visit the park at least once a month."
                        />
                        <FormControlLabel
                            control={<Checkbox checked={three} onChange={this.handleChange(3)} value="3" />}
                            label="I am a smoker."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={four} onChange={this.handleChange(4)} value="4" />}
                          label="I am easily frustrated."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={five} onChange={this.handleChange(5)} value="5" />}
                          label="I have children in school."
                        />
                        {/* <FormControlLabel
                            control={<Checkbox checked={six} onChange={this.handleChange(6)} value={6} />}
                            label="I often work extra hours."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={seven} onChange={this.handleChange(7)} value={7} />}
                          label="I prefer variety to routine."
                        /> */}
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
                <Route exact path="/results" render={ (props) => <Results {...props} allData = {this.state.data} /> } />
                </Paper></Grid><Grid item xs></Grid></Grid>   
          </div> : null}
      </Router>
    );
  }
}

export default withStyles(styles)(CheckboxesGroup);
