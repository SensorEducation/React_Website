import * as React from 'react'
import { render } from 'react-dom';
import { Props, State } from './utils/utils';
import Form from './components/form';
import Graph from './components/graph';


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
    const date = event.target.elements.data.value;
    const datatype = event.target.elements.dataselector.value;
    const api_call = await fetch(`placeholder`);
    const datacall = await api_call.json();
    if (date && datatype) {
      this.setState({
        date: datacall.date,
        datatype: datacall.datatype,
        data: datacall.datatype.data,
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
