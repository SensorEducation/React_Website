import * as React from "react";
import { MenuItem, DropdownButton, Button, FormControl } from 'react-bootstrap';
import { FormProps, DataState } from '../utils/utils';


class Form extends React.Component<FormProps, DataState>{
    render(){
        return(
        <form onSubmit={this.props.getInput}>
            <input type = "text" className="FormControl" placeholder="Date" name = "date"/>
        <br/>
        <select name="dataselector" className="DropdownButton FormControl">
        <option value="temp">Temperature</option>
        <option value="noise">Noise</option>
        <option value="humidity">Humidity</option>
        <option value="pressure">Pressure</option>
        </select>
        <br/>
        <input className="Button Button-Default" type ="submit" value="Enter"/>
        </form>
        )};
}

export default Form;