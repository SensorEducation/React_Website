import * as React from "react";
import { GraphProps, State } from '../utils/utils';
import { Line } from "react-chartjs-2";


class Graph extends React.Component<GraphProps, State>{
    initialState = {
        labels: undefined,
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: undefined
          }
        ]
    };    

    componentDidUpdate(){
    this.initialState.labels = this.props.time
    this.initialState.datasets[0].label = this.props.datatype + " for " + this.props.date + " on MAC " + this.props.macAddr
    this.initialState.datasets[0].data = this.props.data
    }
    render(){
    return(
    <div>
        <p>Graph component</p>
        {this.props.date &&
        <p>{this.props.date}</p>
        } 
        {this.props.datatype && <p>{this.props.datatype}</p>}
        {this.props.data && <p>{this.props.data}</p> &&
            <Line
                data={this.initialState}
            />}
        
    </div>)}
};

export default Graph;