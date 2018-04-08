import * as React from "react";
import { GraphProps, State } from '../utils/utils';
import { Line } from "react-chartjs-2";



const Graph = (props: GraphProps) => (
    <div>
        {props.data && 
        <p>{props.data}</p>}
        {props.time && 
        <p>
        {props.time}
        </p>}
        
    </div>
)

export default Graph;