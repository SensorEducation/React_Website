import * as React from "react";
import { Props, GraphState } from '../utils/Utils';

class Graph extends React.Component<Props, GraphState> {
    render() {
        return (
<div>
    <p>{this.props.date}</p>
    <p>{this.props.datatype}</p>
</div>
        );
    }
}

export default Graph;