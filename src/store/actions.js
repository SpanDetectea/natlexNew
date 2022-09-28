import {SET_DATA__CONTENT} from './const'

export const setDataContent = (data) => {
    console.log('here')
    return {type: SET_DATA__CONTENT, data}
}