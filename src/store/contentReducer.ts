import {
    SET_DATA__CONTENT, TOGGLE__LIST__ACTIVE, TOGGLE__VIEW__ACCORDION,
    SET__NEW__CHART, DELETE__CHART, EDIT__CHART, UPDATE__CHART
} from './const'
let initialState = {
    data: [],
    chartList: [
        {
            name: 'Прогноз максимальной температуры по Цельсию',
            isActive: true,
            isView: true,
            nameEn: 'maxtemp_c',
            color: '#dc3545',
            type: 'line'
        },
        {
            name: 'Прогноз минимальной температуры по Цельсию',
            isActive: true,
            isView: true,
            nameEn: 'mintemp_c',
            color: '#0d6efd',
            type: 'column'
        },
        {
            name: 'Прогноз максимальной температуры по Фаренгейту',
            isActive: true,
            isView: true,
            nameEn: 'maxtemp_f',
            color: '#ffc107',
            type: 'line'
        },
        {
            name: 'Прогноз минимальной температуры по Фаренгейту',
            isActive: false,
            isView: true,
            nameEn: 'mintemp_f',
            color: '#dc3545',
            type: 'line'
        },
        {
            name: 'Прогноз средней температуры по Цельсию',
            isActive: true,
            isView: true,
            nameEn: 'avgtemp_c',
            color: '#dc3545',
            type: 'line'
        },
        {
            name: 'Прогноз средней температуры по Фаренгейту',
            isActive: true,
            isView: true,
            nameEn: 'avgtemp_f',
            color: '#dc3545',
            type: 'line'
        },
        {
            name: 'Прогноз максимальной скорости ветра миль/час',
            isActive: true,
            isView: true,
            nameEn: 'maxwind_mph',
            color: '#dc3545',
            type: 'line'
        },
        {
            name: 'Прогноз максимальной скорости ветра километров/час',
            isActive: true,
            isView: true,
            nameEn: 'maxwind_kph',
            color: '#dc3545',
            type: 'line'
        },
    ],
    id: 1,
    newData: []
}

const contentReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_DATA__CONTENT:
            return {
                ...stateCopy,
                data: action.data.forecast.forecastday.map(item => item.day)
            }
        case TOGGLE__LIST__ACTIVE:
            return {
                ...stateCopy,
                chartList: stateCopy.chartList.map((item, i) => {
                    if (i === action.index) {
                        item.isActive = !item.isActive
                    }
                    return item
                })
            }
        case TOGGLE__VIEW__ACCORDION:
            return {
                ...stateCopy,
                chartList: stateCopy.chartList.map((item, i) => {
                    if (i === action.index) {
                        item.isView = !item.isView
                    }
                    return item
                })
            }
        case SET__NEW__CHART:
            let newProp = `newProp${state.id}`;
            return {
                ...stateCopy,
                chartList: [...state.chartList, {
                    name: action.name,
                    isActive: true,
                    isView: true,
                    nameEn: newProp,
                    color: action.color,
                    type: action.t
                }],
                id: stateCopy.id + 1,
                data: stateCopy.data.map((item, index) => {
                    if (!Number.isNaN(+action.data[index])) {
                        item[newProp] = +action.data[index];
                    }
                    return item;
                }),
                newData: [...stateCopy.newData, {
                    nameEn: newProp,
                    data: [...stateCopy.data.map(item => item[newProp])]
                }]
            }
        case DELETE__CHART:
            return {
                ...stateCopy,
                chartList: [...stateCopy.chartList.slice(0, action.id), ...stateCopy.chartList.slice(action.id + 1, stateCopy.chartList.length)]
            }
        case EDIT__CHART:
            return {
                ...stateCopy,
                chartList: stateCopy.chartList.map((item, i) => {
                    if (i === +action.id) {
                        item.color = action.color;
                        item.name = action.name;
                        item.type = action.t;
                    }
                    return item;
                }),
                data: stateCopy.data.map((item, i) => {
                    item[stateCopy.chartList[action.id].nameEn] = +action.data[i]
                    return item;
                })
            }
        case UPDATE__CHART:
            let days = action.data.forecast.forecastday.map(item => item.day);
            return {
                ...stateCopy,
                data: days.map((item, index) => {
                    if (stateCopy.newData.length) {
                        stateCopy.newData.map(i => {
                            return item[i.nameEn] = i.data[index]
                        })
                    }
                    return item
                })
            }
        default:
            return stateCopy;
    }
}

export default contentReducer;