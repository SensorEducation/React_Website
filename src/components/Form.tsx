import * as React from 'react';
import { MenuItem, DropdownButton, Button, FormControl } from 'react-bootstrap';

interface Props {
  getInput: (event: any) => void;
}

interface State {
  date: string,
  datatype: string,
  error: Error
}

class Form extends React.Component<Props, State> {
  render() {
    return(
      <form onSubmit={this.props.getInput}>
        <input type = "text" className="FormControl" placeholder="MAC Address" name = "mac"/>
        <br/>
        <input type = "date"/>
        <br/>
        <select name="dataselector" className="DropdownButton FormControl">
          <option value="Temperature">Temperature</option>
          <option value="Gas">Gas</option>
          <option value="Humidity">Humidity</option>
          <option value="Pressure">Pressure</option>
        </select>
        <br/>
        <input className="Button Button-Default" type ="submit" value="Enter"/>
      </form>
    )
  };
}

export default Form;
