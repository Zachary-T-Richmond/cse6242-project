import React from 'react';
import Bubbles from './bubbles';
import PropTypes from 'prop-types';

class ReactBubbleChart extends React.Component {
  render() {
    const {
      data,
      width,
      height,
      center,
      title,
      forceStrength,
      keepPositionIntactMultiplier
    } = this.props;
    return (
      <svg width={width} height={height}>
        <Bubbles
          data={data}
          forceStrength={forceStrength}
          center={center}
          keepPositionIntactMultiplier={keepPositionIntactMultiplier}
        />
      </svg>
    );
  }
}

ReactBubbleChart.defaultProps = {
  data: [],
  width: 700,
  height: 600,
  center: { x: 350, y: 300 },
  title: 'React Bubble Chart',
  forceStrength: 0.09,
  keepPositionIntactMultiplier: 1.99
};
ReactBubbleChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  center: PropTypes.object,
  title: PropTypes.string.isRequired,
  forceStrength: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};
export default ReactBubbleChart;
