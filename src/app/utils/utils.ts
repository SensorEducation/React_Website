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