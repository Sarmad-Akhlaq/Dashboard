import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';

const generateData = (n) => {
  const ret = [];
  let y = 0;
  for (let i = 0; i < n; i += 1) {
    y += Math.round(Math.random() * 10 - 5);
    ret.push({ x: i, y });
  }
  return ret;
};
const data = generateData(100);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const {
      data: chartData,
    } = this.state;
    return (
        <Chart height="260" data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField="y" argumentField="x" />
          <ZoomAndPan />
        </Chart>
    );
  }
}
