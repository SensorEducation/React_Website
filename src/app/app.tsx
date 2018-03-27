import * as React from "react";
import { render } from 'react-dom';
import { Props, State } from './utils/utils';
import Form from './components/Form';
import Graph from './components/Graph';


const styles = require('./app.pcss');


class App extends React.Component<Props, State> {

  state = {
    macAddr: undefined,
    date: undefined,
    datatype: undefined,
    data: undefined,
    error: undefined
  }

  getInput = async (event: any) => {
    event.preventDefault();
    const macval = event.target.elements[0].value;
    const dateval = event.target.elements[1].value;
    const datatypeval = event.target.elements[2].value;
    const api_call = await fetch(`https://233vxbsin8.execute-api.us-east-1.amazonaws.com/Prod`), request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  
      body: JSON.stringify(
        {
          mac: macval,
          date: dateval,
          datatype: datatypeval,
        }
      )
    }
    const response = await api_call.json();
    if (macval && dateval && datatypeval && response.data) {
      this.setState({
        macAddr: macval,
        date: dateval,
        datatype: datatypeval,
        data: response.data,
        error: ""
      });
    }
    else {
      this.setState({
        macAddr: undefined,
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
      <>
        <h1 className={styles.header}>Hello World!</h1>
        <Form getInput={this.getInput} />
        <Graph
              macAddr = {this.state.macAddr} 
              date={this.state.date}
              datatype={this.state.datatype} 
              data={this.state.data}/>
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
