export interface DataState extends State{
    date: string,
    datatype: string,
    error: any
}

export interface GraphState extends State{
    date: string,
    datatype: string,
    data: number[],
    error: any
}

export interface Props { }

export interface State { }

export interface GraphProps extends Props {
    date: any,
    datatype: any
}

export interface FormProps extends Props {
    getInput: any;
}