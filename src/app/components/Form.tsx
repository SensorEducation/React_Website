import * as React from "react";
import { MenuItem, DropdownButton, Button, FormControl } from 'react-bootstrap';
import { FormProps, DataState } from '../utils/utils';


class Form extends React.Component<FormProps, DataState>{
    render(){
        return(
        <form onSubmit={this.props.getInput}>
        <input type = "text" className="FormControl" placeholder="MAC Address" name = "mac"/>
        <br/>
        <input type = "date"/>
        <br/>
        <select name="dataselector" className="DropdownButton FormControl">
        <option value="Temperature">Temperature</option>
        <option value="Noise">Noise</option>
        <option value="Humidity">Humidity</option>
        <option value="Pressure">Pressure</option>
        </select>
        <br/>
        <input className="Button Button-Default" type ="submit" value="Enter"/>
        </form>
        )};
}

export default Form;