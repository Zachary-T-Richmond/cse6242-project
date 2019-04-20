import React from 'react';
import ReactBubbleChart from './bubbles/index';
import Typography from '@material-ui/core/Typography';

const Results = ({ allData }) => {
  console.log(allData);
  const data = [
    {
      index: 0,
      name: "East Atlanta",
      color: "#bbdefb",
      radius: 40,
      tooltip: "LFI: 25"

    },
    {
      index: 1,
      name: "Vinings",
      color: "#bbdefb",
      radius: 40,
      tooltip: "LFI: 25"

    },
    {
      index: 2,
      name: "Rowsell",
      color: "#bbdefb",
      radius: 40,
      tooltip: "LFI: 25"

    },
    {
      index: 3,
      name: "Virginia Highlands",
      color: "#d32f2f",
      radius: 40,
      tooltip: "LFI: 25"

    },
    {
      index: 4,
      name: "Midtown",
      color: "#d32f2f",
      radius: 40,
      tooltip: "LFI: 25"

    },
    {
      index: 5,
      name: "Old 4th Ward",
      color: "#bbdefb",
      radius: 40,
      tooltip: "LFI: 25"

    },
    {
      index: 6,
      name: "Edgewood",
      color: "#bbdefb",
      radius: 40,
      tooltip: "LFI: 25"
    }
  ];
  return (
    <div>
      <Typography variant="h4" align="center">
        The best ATL hub for you: {data[5].name}
      </Typography>
      <ReactBubbleChart data={data} />
    </div>
  )
}

export default Results;
