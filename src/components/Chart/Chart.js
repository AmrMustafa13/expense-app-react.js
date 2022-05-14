import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value); // Returning an array of numbers
    const totalMaximun = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => <ChartBar value={dataPoint.value} maxValue={totalMaximun} label={dataPoint.label} key={dataPoint.label} />)}
        </div>
    );
}

export default Chart;