import {SET_DATA__CONTENT} from './const'
let initialState = {
    data: [],
    chartList: [
        'Прогноз максимальная температура по Цельсию',
        'Прогноз минимальная температура по Цельсию',
        'Прогноз максимальная температура по Фаренгейту',
        'Прогноз минимальная температура по Фаренгейту',
        'Прогноз восход солнца',
        'Прогноз заход солнца',
        'Прогноз восход Луны',
        'Прогноз заход Луны',
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
                data: action.data
            }
        default:
            return state;
    }
}

export default contentReducer;