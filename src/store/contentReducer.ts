import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Forecastday } from '../types/types';
import { IAddNEwChart } from '../types/IChartList';
import { IEditChart } from '../types/IEditChart';

let initialState = {
    forecastDays: [] as Forecastday[],
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
    dates: [''],
    viewCount: 7
}

const contentReducer = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setForecastDays: (state, { payload }: PayloadAction<Forecastday[]>) => {
            state.dates = payload.map(item => item.date.slice(5).replace('-', '.'))
            state.forecastDays = [...payload]
        },
        toggleViewAccordion: (state, { payload }: PayloadAction<number>) => {
            state.chartList[payload].isView = !state.chartList[payload].isView
        },
        toggleListActive: (state, { payload }: PayloadAction<number>) => {
            state.chartList[payload].isActive = !state.chartList[payload].isActive
        },
        addNewChart: (state, { payload }: PayloadAction<IAddNEwChart>) => {
            const newProp = `newProp${state.id}`;
            state.chartList.push({
                name: payload.name,
                isActive: true,
                isView: true,
                nameEn: newProp,
                color: payload.color,
                type: payload.type
            })
            state.id = state.id + 1
            const dataValues = payload.data.split(',')
            state.forecastDays.forEach((item, index) => {
                if (Number.isNaN(+dataValues[index])) {
                    return item.day[newProp] = 0
                }
                return item.day[newProp] = +dataValues[index]
            })
        },
        deleteChart: (state, { payload }: PayloadAction<number>) => {
            state.chartList = [...state.chartList.slice(0, payload), ...state.chartList.slice(payload + 1, state.chartList.length)]
        },
        editChart: (state, { payload }: PayloadAction<IEditChart>) => {
            state.chartList[payload.id].color = payload.color
            state.chartList[payload.id].type = payload.type
            state.chartList[payload.id].name = payload.name
            const dataValues = payload.data.split(',')
            state.forecastDays.forEach((item, index) => {
                if (Number.isNaN(+dataValues[index])) {
                    return item.day[state.chartList[payload.id].nameEn] = 0
                }
                return item.day[state.chartList[payload.id].nameEn] = +dataValues[index]
            })
        },
        updateDataChart: (state, { payload }: PayloadAction<number>) => {
            state.viewCount = payload
        }
    }
})
export const { setForecastDays, toggleViewAccordion, toggleListActive, deleteChart, addNewChart, editChart, updateDataChart } = contentReducer.actions

export default contentReducer.reducer;