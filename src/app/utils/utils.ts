export interface DataState extends State{
    date: string,
    datatype: string,
    error: Error
}

export interface GraphState extends State{
    date: string,
    datatype: string,
    data: number[],
    error: Error
}

export interface Props { 
}

export interface State {
 }

export interface GraphProps extends Props {
    macAddr: any,
    date: string,
    datatype: string,
    data: any,
    time: any
}

export interface FormProps extends Props {
    getInput: any;
}