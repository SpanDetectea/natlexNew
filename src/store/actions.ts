import {
    SET_DATA__CONTENT, TOGGLE__LIST__ACTIVE, TOGGLE__VIEW__ACCORDION,
    SET__NEW__CHART, DELETE__CHART, EDIT__CHART, UPDATE__CHART
} from './const'

interface IDay {
    [key:string]:string|number;
}

interface ISetDataContent {
    forecast: {
        forecastday: IDay[]
    }
}

export const setDataContent = (data: ISetDataContent) => {
    return { type: SET_DATA__CONTENT, data }
}
export const toggleListActive = (index: number) => {
    return { type: TOGGLE__LIST__ACTIVE, index }
}
export const toggleViewAccordion = (index: number) => {
    return { type: TOGGLE__VIEW__ACCORDION, index }
}
export const setNewChart = (name: string, color:string, data:string[], t: string) => {
    return { type: SET__NEW__CHART, name, color, data, t }
}
export const deleteChart = (id: number) => {
    return { type: DELETE__CHART, id }
}
export const editChartValue = (name:string, color:string, data:string[], id:number, t:string) => {
    return { type: EDIT__CHART, name, color, data, id, t }
}
export const updateChart = (data: ISetDataContent) => {
    return { type: UPDATE__CHART, data }
}
