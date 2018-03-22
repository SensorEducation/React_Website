import * as React from "react";
import { GraphProps, State } from '../utils/utils';
import { Line } from "react-chartjs-2";

const Graph = (props: GraphProps) => (
    <div>
        <p>Graph component</p>
        {props.date &&
        <p>{props.date}</p>
        } 
        {props.datatype && <p>{props.datatype}</p>}
        {props.data &&
            <Line
                data={props.data}
                options={{
                    title: {
                        display: props.datatype,
                        text: props.datatype + ' for ' + props.date + ' on MAC ' + props.macAddr,
                        fontSize: 25
                    }
                }}
            />}
    </div>
)

export default Graph;