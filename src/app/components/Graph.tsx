import * as React from "react";
import { GraphProps, State } from '../utils/utils';

class Graph extends React.Component<GraphProps, State> {
    render() {
        return (
<div>
    <p>Graph component</p>
    {this.props.date && <p>Date: {this.props.date}</p>}
    <br/>
    {this.props.datatype && <p>Datatype: {this.props.datatype}</p>}
</div>
        );
    }
}

export default Graph;