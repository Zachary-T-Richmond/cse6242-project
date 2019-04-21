import React from 'react';
import ReactBubbleChart from './bubbles/index';
import Typography from '@material-ui/core/Typography';

const Results = ({ allData, winningCityName}) => {
  if(winningCityName == null) winningCityName = "Atlanta"
  return (
    <div>
      <Typography variant="h4" align="center">
        The best ATL City for you: {winningCityName}
      </Typography>
      <ReactBubbleChart data={allData} />
    </div>
  )
}

export default Results;
