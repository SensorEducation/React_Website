import * as React from "react";
import { GraphProps, State } from '../utils/utils';

class Graph extends React.Component<GraphProps, State> {
    render() {
        return (
<div>
    {this.props.date && <p>Date: {this.props.date}</p>}
    {this.props.datatype && <p>{this.props.datatype}</p>}
</div>
        );
    }
}

export default Graph;