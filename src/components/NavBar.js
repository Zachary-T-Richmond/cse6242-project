import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';

import { Button, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',

  },
  formControl: {
    margin: theme.spacing.unit * 6,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    data: "test",
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
                <Paper></Paper>
            </Grid>

        <Grid item xs>
            <Paper >
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Livability Questions: Please Select From Below</FormLabel>
                <RadioGroup
                    aria-label="test"
                    name="test"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="one" control={<Radio />} label="Statement One" />
                    <FormControlLabel value="two" control={<Radio />} label="Statement Two" />
                    <FormControlLabel value="three" control={<Radio />} label="Statement Three" />
                    <FormControlLabel value="four" control={<Radio />} label="Statement Four" />
                    <FormControlLabel value="five" control={<Radio />} label="Statement Five" />
                    <FormControlLabel value="six" control={<Radio />} label="Statement Six" />
                    <FormControlLabel value="seven" control={<Radio />} label="Statement Seven" />
                    {/* <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                    /> */}
                    <Button variant="h6" color="inherit">Submit</Button>
                </RadioGroup>
                </FormControl>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper></Paper>
            </Grid>
        </Grid>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);