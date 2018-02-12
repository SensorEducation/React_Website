import * as React from "react";
import { render } from 'react-dom';
import { Props, State } from './utils/utils';
import Form from './components/Form';
import Graph from './components/Graph';


const styles = require('./app.pcss');


class App extends React.Component<Props, State> {

  state = {
    date: undefined,
    datatype: undefined,
    data: undefined,
    error: undefined
  }

  getInput = async (event: any) => {
    event.preventDefault();
    const dateval = event.target.elements[0].value;
    const datatypeval = event.target.elements[1].value;
    //This doesn't work yet; fix it for AWS
    //const api_call = await fetch(`placeholder`);
    //const datacall = await api_call.json();
    if (dateval && datatypeval) {
      this.setState({
        date: dateval,
        datatype: datatypeval,
        data: "",
        error: ""
      });
    }
    else {
      this.setState({
        date: undefined,
        datatype: undefined,
        data: undefined,
        error: "Please input values."
      });
    }
  }

  getState = {

  };

  render() {
    return (
      <div>
        <h1 className={styles.header}>Hello World!</h1>
        <Form getInput={this.getInput} />
        <Graph date={this.state.date}
               datatype={this.state.datatype} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
