import {SET_DATA__CONTENT, TOGGLE__LIST__ACTIVE,TOGGLE__VIEW__ACCORDION} from './const'
let initialState = {
    data: [],
    chartList: [
        {
            name:'Прогноз максимальной температуры по Цельсию',
            isActive: true,
            isView: true,
            nameEn: 'maxtemp_c'
        },
        {
            name:'Прогноз минимальной температуры по Цельсию',
            isActive: true,
            isView: true,
            nameEn: 'mintemp_c'
        },
        {
            name:'Прогноз максимальной температуры по Фаренгейту',
            isActive: true,
            isView: true,
            nameEn: 'maxtemp_f'
        },
        {
            name:'Прогноз минимальной температуры по Фаренгейту',
            isActive: false,
            isView: true,
            nameEn: 'mintemp_f'
        },
        {
            name:'Прогноз средней температуры по Цельсию',
            isActive: true,
            isView: true,
            nameEn: 'avgtemp_c'
        },
        {
            name:'Прогноз средней температуры по Фаренгейту',
            isActive: true,
            isView: true,
            nameEn: 'avgtemp_f'
        },
        {
            name:'Прогноз максимальной скорости ветра миль/час',
            isActive: true,
            isView: true,
            nameEn: 'maxwind_mph'
        },
        {
            name:'Прогноз максимальной скорости ветра километров/час',
            isActive: true,
            isView: true,
            nameEn: 'maxwind_kph'
        },
    ],
    countries: [
        {
            nameEn:'London',
            nameRu:'Лондон'
        },
        {
            nameEn:'Moscow',
            nameRu:'Москва'
        },
        {
            nameEn:'Petrozavodsk',
            nameRu:'Петрозаводск'
        },
        {
            nameEn:'Voronezh',
            nameRu:'Воронеж'
        },
    ]
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA__CONTENT:
            return {
                ...state,
                data: action.data.forecast.forecastday
            }
        case TOGGLE__LIST__ACTIVE:
            return {
                ...state,
                chartList: state.chartList.map((item, i)=> {
                    if (i===action.index) {
                        item.isActive = !item.isActive
                    }
                    return item
                })
            }
        case TOGGLE__VIEW__ACCORDION:
            return {
                ...state,
                chartList: state.chartList.map((item, i)=> {
                    if (i===action.index) {
                        item.isView = !item.isView
                    }
                    return item
                })
            }
        default:
            return state;
    }
}

export default contentReducer;