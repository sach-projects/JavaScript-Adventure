import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';


const Chart = props => {
    let dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let maxValue = Math.max(...dataPointValues);

    console.log(maxValue);
    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={maxValue} />)}
    </div>
}

export default Chart;