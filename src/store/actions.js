import {SET_DATA__CONTENT, TOGGLE__LIST__ACTIVE, TOGGLE__VIEW__ACCORDION, SET__NEW__CHART,DELETE__CHART} from './const'

export const setDataContent = (data) => {
    return {type: SET_DATA__CONTENT, data}
}
export const toggleListActive = (index) => {
    return {type: TOGGLE__LIST__ACTIVE, index}
}
export const toggleViewAccordion = (index) => {
    return {type: TOGGLE__VIEW__ACCORDION, index}
}
export const setNewChart = (name,color,data) => {
    return {type: SET__NEW__CHART, name,color,data}
}
export const deleteChart = (id) => {
    return {type: DELETE__CHART, id}
}
