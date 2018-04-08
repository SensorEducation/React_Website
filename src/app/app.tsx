import * as React from "react";
import { render } from 'react-dom';
import { Props, State } from './utils/utils';
import Form from './components/Form';
import Graph from './components/Graph';
import axios from 'axios';
import request from 'request';


const styles = require('./app.pcss');


class App extends React.Component<Props, State> {

  state = {
    macAddr: undefined,
    date: undefined,
    datatype: undefined,
    data: undefined,
    time: undefined,
    error: undefined
  }

  getInput = async (event: any) => {
    event.preventDefault();
    const macval = event.target.elements[0].value;
    const dateval = event.target.elements[1].value;
    const datatypeval = event.target.elements[2].value;
    const api_call = await fetch('https://233vxbsin8.execute-api.us-east-1.amazonaws.com/Prod/SensorEd/', {
      method: 'POST',
      body:
        JSON.stringify({
          'mac': macval,
          'date': dateval,
          'datatype': datatypeval
        })
    })
    const response = await api_call.json();
    if (macval && dateval && datatypeval && response.data && response.time) {
      this.setState({
        macAddr: macval,
        date: dateval,
        datatype: datatypeval,
        data: response.data,
        time: response.time,
        error: ""
      });
    }
    else {
      this.setState({
        macAddr: undefined,
        date: undefined,
        datatype: undefined,
        data: undefined,
        time: undefined,
        error: "Please input values."
      });
    }

  }


  render() {
    return (
      <>
        <h1 className={styles.header}>Hello World!</h1>
        <Form getInput={this.getInput} />
        <Graph
              macAddr = {this.state.macAddr} 
              date={this.state.date}
              datatype={this.state.datatype} 
              data={this.state.data}
              time={this.state.time}/>
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
