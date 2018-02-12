import * as React from 'react';
import { MenuItem, DropdownButton, Button, FormControl } from 'react-bootstrap';
import { Props, DataState } from '../utils/utils';


class Form extends React.Component{
    render(){
        return(
    <div>
        <form onSubmit={this.props.getInput}>
            <input type = "text" className="FormControl" placeholder="Date" name = "date"
            value="{{request.form.date}}"/>
        <br/>
        <select name="dataselector" className="selectpicker FormControl">
        </select>
        <br/>
        <input className="Button Button-Default" type ="submit" value="Enter"/>>
        </form>
    </div>
        )};
}

export default Form;