import React from 'react';
import ReactBubbleChart from './bubbles/index';
import Typography from '@material-ui/core/Typography';

const Results = ({ allData }) => {
  console.log(allData)

  return (
    <div>
      <Typography variant="h4" align="center">
        The best ATL hub for you: {allData[0].name}
      </Typography>
      <ReactBubbleChart data={allData} />
    </div>
  )
}

export default Results;
