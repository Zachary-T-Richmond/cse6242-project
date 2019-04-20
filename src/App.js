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
          "LFI": 35,
          "factors": [60,70,54,67,70],
          "nameHold": "Alpharetta"
      },
      {
          "index":1,
          "name": "Auburn",
          "color": "#d32f2f",
          "radius": 45,
          "tooltip": "LFI: 30",
          "LFI": 30,
          "factors": [47,23,92,22,64],
          "nameHold": "Auburn"
      },
      {
          "index":2,
          "name": "",
          "color": "#00bcd4",
          "radius": 10,
          "tooltip": "Brookhaven LFI: 25",
          "LFI": 25,
          "factors": [71,13,43,39,93],
          "nameHold": "Brookhaven"
      },
      {
          "index":3,
          "name": "",
          "color": "#00bcd4",
          "radius": 10,
          "tooltip": "Buckhead LFI: 20",
          "LFI": 20,
          "factors": [25,55,65,75,92],
          "nameHold": "Buckhead"
      },
      {
        "index":3,
        "name": "",
        "color": "#00bcd4",
        "radius": 10,
        "tooltip": "East Atlanta LFI: 15",
        "LFI": 15,
        "factors": [32,17,62,67,81],
        "nameHold": "East Atlanta"
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
        let totalSelected = whatHasBeenSelected.length  
        console.log(whatHasBeenSelected)
        let tempData = this.state.data
        console.log(tempData)
        let winnerCity = ""
        let winningFactor = -1
        for(let row in tempData){
          if(totalSelected == 1){
            let factor = tempData[row].factors[whatHasBeenSelected[0]-1]
            tempData[row].LFI = factor
            if(factor > 70){
              tempData[row].tooltip = `LFI: ${factor}`
              tempData[row].color = "#d32f2f"
              tempData[row].radius = 45
              tempData[row].name = tempData[row].nameHold
            } else {
              tempData[row].tooltip = `${tempData[row].nameHold} LFI: ${factor}`
              tempData[row].color = "#00bcd4"
              tempData[row].radius = 10
              tempData[row].name = ""
            }
            if(factor> winningFactor){
              winnerCity = tempData[row].nameHold
              winningFactor = factor
            }
          }
        }
        this.setState({
          data: tempData,
          winner: winnerCity
        })
      }
    );
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
                <Route exact path="/results" render={ (props) => <Results {...props} allData = {this.state.data} winningCityName = {this.state.winner}/> } />
                </Paper></Grid><Grid item xs></Grid></Grid>   
          </div> : null}
      </Router>
    );
  }
}

export default withStyles(styles)(CheckboxesGroup);
