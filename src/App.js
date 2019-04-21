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
import Typography from '@material-ui/core/Typography';


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
    standardWeight: [1.23,1.20,1.15,1.1,1.1,1.12,1.1],
    winner: null,
    show: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    data: [
      {
        "index":0,
        "name": "Alpharetta",
        "color": "#d32f2f",
        "radius": 55,
        "tooltip": "LFI: 77",
        "LFI": 77,
        "factors": [64,99,86,66,80,67,72],
        "nameHold": "Alpharetta"
      },
      {
        "index":1,
        "name": "Marietta",
        "color": "#d32f2f",
        "radius": 55,
        "tooltip": "LFI: 71",
        "LFI": 71,
        "factors": [43,83,76,57,88,47,98],
        "nameHold": "Marietta"
      },
      {
        "index":2,
        "name": "Duluth",
        "color": "#d32f2f",
        "radius": 55,
        "tooltip": "LFI: 70",
        "LFI": 70,
        "factors": [56,97,61,63,78,59,75],
        "nameHold": "Duluth"
      },
      {
        "index":3,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Fayetteville LFI: 69",
        "LFI": 69,
        "factors": [67,95,64,59,80,47,70],
        "nameHold": "Fayetteville"
      },
      {
        "index":4,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Smyrna LFI: 69",
        "LFI": 69,
        "factors": [48,89,83,64,83,52,58],
        "nameHold": "Smyrna"
      },
      {
        "index":5,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Johns Creek LFI: 68",
        "LFI": 68,
        "factors": [52,100,66,59,62,75,58],
        "nameHold": "Johns Creek"
      },
      {
        "index":6,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Douglasville LFI: 66",
        "LFI": 66,
        "factors": [52,94,60,53,78,56,66],
        "nameHold": "Douglasville"
      },
      {
        "index":7,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Old Fourth Ward LFI: 66",
        "LFI": 66,
        "factors": [57,68,44,85,44,71,88],
        "nameHold": "Old Fourth Ward"
      },
      {
        "index":8,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Powder Springs LFI: 65",
        "LFI": 65,
        "factors": [60,91,46,55,79,57,62],
        "nameHold": "Powder Springs"
      },
      {
        "index":9,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Sandy Springs LFI: 65",
        "LFI": 65,
        "factors": [40,86,66,68,82,46,66],
        "nameHold": "Sandy Springs"
      },
      {
        "index": 10,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Druid Hills LFI: 64",
        "LFI": 64,
        "factors": [63,85,28,76,59,64,73],
        "nameHold": "Druid Hills"
      },
      {
        "index":11,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "East Atlanta LFI: 63",
        "LFI": 63,
        "factors": [54,68,46,72,57,68,72],
        "nameHold": "East Atlanta"
      },
      {
        "index":12,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Kennesaw LFI: 63",
        "LFI": 63,
        "factors": [57,96,56,61,77,36,52],
        "nameHold": "Kennesaw"
      },
      {
        "index":13,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Peachtree City LFI: 62",
        "LFI": 62,
        "factors": [67,96,47,64,68,25,64],
        "nameHold": "Peachtree City"
      },
      {
        "index":14,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Fairburn LFI: 61",
        "LFI": 61,
        "factors": [37,86,67,54,89,43,51],
        "nameHold": "Fairburn"
      },
      {
        "index":15,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Virginia Highlands LFI: 61",
        "LFI": 61,
        "factors": [58,64,30,78,34,73,88],
        "nameHold": "Virginia Highlands"
      },
      {
        "index":16,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Lilburn LFI: 60",
        "LFI": 60,
        "factors": [55,86,55,55,75,39,64],
        "nameHold": "Lilburn"
      },
      {
        "index":17,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Midtown LFI: 60",
        "LFI": 60,
        "factors": [57,76,32,85,40,29,96],
        "nameHold": "Midtown"
      },
      {
        "index":18,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Buford LFI: 59",
        "LFI": 59,
        "factors": [59,85,26,59,75,46,63],
        "nameHold": "Buford"
      },
      {
        "index":19,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Lawrenceville LFI: 59",
        "LFI": 59,
        "factors": [49,89,47,52,87,46,37],
        "nameHold": "Lawrenceville"
      },
      {
        "index":20,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Norcross LFI: 59",
        "LFI": 59,
        "factors": [49,88,37,58,74,46,60],
        "nameHold": "Norcross"
      },
      {
        "index":21,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Snellville LFI: 58",
        "LFI": 58,
        "factors": [54,90,70,27,77,38,49],
        "nameHold": "Snellville"
      },
      {
        "index":23,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Decatur LFI: 57",
        "LFI": 57,
        "factors": [48,59,28,62,69,44,89],
        "nameHold": "Decatur"
      },
      {
        "index":24,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Brookhaven LFI: 56",
        "LFI": 56,
        "factors": [40,85,18,59,50,66,69],
        "nameHold": "Brookhaven"
      },
      {
        "index":25,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Hoschton LFI: 55",
        "LFI": 55,
        "factors": [82,78,42,61,25,60,31],
        "nameHold": "Hoschton"
      },
      {
        "index":26,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Dunwoody LFI: 53",
        "LFI": 53,
        "factors": [47,86,43,73,57,50,14],
        "nameHold": "Dunwoody"
      },
      {
        "index":27,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Kirkwood LFI: 52",
        "LFI": 52,
        "factors": [44,62,11,70,49,63,64],
        "nameHold": "Kirkwood"
      },
      {
        "index":28,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Lovejoy LFI: 52",
        "LFI": 52,
        "factors": [41,89,53,56,79,23,17],
        "nameHold": "Lovejoy"
      },
      {
        "index":29,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Riverdale LFI: 51",
        "LFI": 51,
        "factors": [23,77,53,56,86,15,42],
        "nameHold": "Riverdale"
      },
      {
        "index":30,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "College Park LFI: 50",
        "LFI": 50,
        "factors": [18,45,49,41,93,42,62],
        "nameHold": "College Park"
      },
      {
        "index":31,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Dacula LFI: 49",
        "LFI": 49,
        "factors": [56,69,48,31,58,42,39],
        "nameHold": "Dacula"
      },
      {
        "index":32,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Lake City LFI: 49",
        "LFI": 49,
        "factors": [41,44,53,61,63,29,48],
        "nameHold": "Lake City"
      },
      {
        "index":33,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Auburn LFI: 48",
        "LFI": 48,
        "factors": [61,89,34,29,47,34,37],
        "nameHold": "Auburn"
      },
      {
        "index":34,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Doraville LFI: 47",
        "LFI": 47,
        "factors": [42,47,23,58,80,44,35],
        "nameHold": "Doraville"
      },
      {
        "index":35,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Forest Park LFI: 47",
        "LFI": 47,
        "factors": [24,45,46,52,72,32,56],
        "nameHold": "Forest Park"
      },
      {
        "index":36,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Buckhead LFI: 46",
        "LFI": 46,
        "factors": [66,23,32,28,54,88],
        "nameHold": "Buckhead"
      },
      {
        "index":37,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Lithonia LFI: 43",
        "LFI": 43,
        "factors": [51,27,9,37,65,52,54],
        "nameHold": "Lithonia"
      },
      {
        "index":38,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Pine Lake LFI: 42",
        "LFI": 42,
        "factors": [72,36,27,45,16,50,47,42],
        "nameHold": "Pine Lake"
      },
      {
        "index":38,
        "name": "",
        "color": "#00bcd4",
        "radius": 25,
        "tooltip": "Rex LFI: 23",
        "LFI": 23,
        "factors": [30,48,9,36,15,22,1],
        "nameHold": "Rex"
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
          .filter(y => this.state[y]).map(e=>e-1)
          
        // console.log(whatHasBeenSelected)  
        let totalSelected = whatHasBeenSelected.length  
        // console.log(whatHasBeenSelected)
        let tempData = this.state.data
        // console.log(tempData)
        let winnerCity = ""
        let winningFactor = -1
        for(let row in tempData){
          if(totalSelected == 1){
            let factor = tempData[row].factors[whatHasBeenSelected[0]]
            tempData[row].LFI = factor
            if(factor > 80){
              tempData[row].tooltip = `LFI: ${factor}`
              tempData[row].color = "#b71c1c"
              tempData[row].radius = 55
              tempData[row].name = tempData[row].nameHold
            } else if(factor>40 && factor <=79){
              tempData[row].tooltip = `${tempData[row].nameHold} LFI: ${factor}`
              tempData[row].color = "#f44336"
              tempData[row].radius = 25
              tempData[row].name = ""
            }else{
              tempData[row].tooltip = `${tempData[row].nameHold} LFI: ${factor}`
              tempData[row].color = "#ffcdd2"
              tempData[row].radius = 10
              tempData[row].name = ""
            }
            if(factor> winningFactor){
              winnerCity = tempData[row].nameHold
              winningFactor = factor
            }
          } else {
            var sum = 0
            for(let selected in whatHasBeenSelected){
              sum += tempData[row].factors[selected]
            }
            let factor = sum/whatHasBeenSelected.length
            if(factor > 80){
              tempData[row].tooltip = `LFI: ${factor}`
              tempData[row].color = "#b71c1c"
              tempData[row].radius = 70
              tempData[row].name = tempData[row].nameHold
            } else if(factor>40 && factor <=79){
              tempData[row].tooltip = `LFI: ${factor}`
              tempData[row].color = "#f44336"
              tempData[row].radius = 45
              tempData[row].name = tempData[row].nameHold
            }else{
              tempData[row].tooltip = `${tempData[row].nameHold} LFI: ${factor}`
              tempData[row].color = "#ffcdd2"
              tempData[row].radius = 25
              tempData[row].name = ""
            }
            if(factor> winningFactor){
              winnerCity = tempData[row].nameHold
              winningFactor = factor
            }
            
          }
        }
        for(let row1 in tempData){
          if(tempData[row1].name==winnerCity){
            tempData[row1].color = "#004d40"
            tempData[row1].radius = 80
          }
        }
        this.setState({
          data: tempData,
          winner: winnerCity,
        })
      }
    );
  };
  handleChange1 = name => event => {
    this.setState({ [name]: event.target.checked}, ()=>{
      let whatHasBeenSelected = Object.keys(this.state)
        .map(x => Number(x))
        .filter(t=>{
          if(!isNaN(t)){
            return t
          }
        })
        .filter(y => this.state[y]).map(q=> q-8)
        
      // console.log(whatHasBeenSelected)  
      let totalSelected = whatHasBeenSelected.length  
      // console.log(whatHasBeenSelected)
      let tempData = this.state.data
      // console.log(tempData)
      let winnerCity = ""
      let winningFactor = -1
      for(let row in tempData){
        if(totalSelected == 1){
          let factor = tempData[row].factors[whatHasBeenSelected[0]]
          tempData[row].LFI = this.state.standardWeight[whatHasBeenSelected[0]]*factor
          if(factor > 80){
            tempData[row].tooltip = `LFI: ${factor}`
            tempData[row].color = "#b71c1c"
            tempData[row].radius = 55
            tempData[row].name = tempData[row].nameHold
          } else if(factor>40 && factor <=79){
            tempData[row].tooltip = `${tempData[row].nameHold} LFI: ${factor}`
            tempData[row].color = "#f44336"
            tempData[row].radius = 25
            tempData[row].name = ""
          }else{
            tempData[row].tooltip = `${tempData[row].nameHold} LFI: ${factor}`
            tempData[row].color = "#ffcdd2"
            tempData[row].radius = 10
            tempData[row].name = ""
          }
          if(factor> winningFactor){
            winnerCity = tempData[row].nameHold
            winningFactor = factor
          }
        } else {
          var sum = 0
          for(let selected in whatHasBeenSelected){
            sum += this.state.standardWeight[selected]*tempData[row].factors[selected]
          }
          let factor = sum/whatHasBeenSelected.length
          if(factor > 92){
            tempData[row].tooltip = `LFI: ${factor}`
            tempData[row].color = "#b71c1c"
            tempData[row].radius = 70
            tempData[row].name = tempData[row].nameHold
          } else if(factor>60 && factor <=91){
            tempData[row].tooltip = `LFI: ${factor}`
            tempData[row].color = "#f44336"
            tempData[row].radius = 45
            tempData[row].name = tempData[row].nameHold
          }else{
            tempData[row].tooltip = `${tempData[row].nameHold} LFI: ${factor}`
            tempData[row].color = "#ffcdd2"
            tempData[row].radius = 25
            tempData[row].name = ""
          }
          if(factor> winningFactor){
            winnerCity = tempData[row].nameHold
            winningFactor = factor
          }
          
        }
      }
      for(let row1 in tempData){
        if(tempData[row1].name==winnerCity){
          tempData[row1].color = "#004d40"
          tempData[row1].radius = 80
        }
      }
      this.setState({
        data: tempData,
        winner: winnerCity,
      })
    }
  );
};

  hide = () => {
    this.setState({show: !this.state.show})
  }
 
  render() {
    const { classes } = this.props;
    const { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen} = this.state;

    return (
      <Router>
          <NavBar/>
          {this.state.show ? <div>
            <Typography variant="h3" align="center">ONLY select from one mode at a time.</Typography>
            <Typography variant="h4" align="center">Please refresh the page if you are returning to the homepage from a previous selection.</Typography>
              <Grid container spacing={24}>
              <Grid item xs><Paper>
                    <FormControl component="fieldset" className={classes.formControl}>
                      <FormLabel component="legend">Standard Mode | Select what is TRUE for you:</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox checked={eight} onChange={this.handleChange1(8)} value="8" />}
                          label="Safety"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={nine} onChange={this.handleChange1(9)} value="9" />}
                          label="Environment"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={ten} onChange={this.handleChange1(10)} value="10" />}
                            label="Healthcare"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={eleven} onChange={this.handleChange1(11)} value="11" />}
                          label="Transportation"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={twelve} onChange={this.handleChange1(12)} value="12" />}
                          label="Government/Education"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={thirteen} onChange={this.handleChange1(13)} value="13" />}
                            label="Career/Job"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={fourteen} onChange={this.handleChange1(14)} value="14" />}
                          label="Recreation/Amenities"
                        />
                      </FormGroup>
                      <Button 
                      component={Link} to="/results" 
                      variant="contained" color="secondary" onClick={this.hide}>Submit</Button>
                    </FormControl>
                  </Paper></Grid><Grid item xs><Paper>
                    <FormControl component="fieldset" className={classes.formControl}>
                      <FormLabel component="legend">Pyschological Mode | Select what is TRUE for you:</FormLabel>
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
                        <FormControlLabel
                            control={<Checkbox checked={six} onChange={this.handleChange(6)} value="6" />}
                            label="I often work extra hours."
                        />
                        <FormControlLabel
                          control={<Checkbox checked={seven} onChange={this.handleChange(7)} value="7" />}
                          label="I prefer variety to routine."
                        />
                      </FormGroup>
                      <Button 
                      component={Link} to="/results" 
                      variant="contained" color="secondary" onClick={this.hide}>Submit</Button>
                    </FormControl>
                  </Paper></Grid>
                  </Grid>
          </div> : null}
          {!this.state.show ?<div>
            <Grid container spacing={24}><Grid item xs></Grid><Grid item xs><Paper>
            <Button component={Link} to="/cse6242"
                variant="contained" color="secondary" onClick={this.hide}>Return to homepage | Don't click browser back button</Button>
                <Route exact path="/results" render={ (props) => <Results {...props} allData = {this.state.data} winningCityName = {this.state.winner}/> } />
                </Paper></Grid><Grid item xs></Grid></Grid>   
          </div> : null}
      </Router>
    );
  }
}

export default withStyles(styles)(CheckboxesGroup);
