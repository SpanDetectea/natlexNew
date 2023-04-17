export interface IChartList {
    name: string
    isActive: boolean
    isView: boolean
    nameEn: string
    color: string
    type: string
}
export interface IAddNEwChart extends IChartList {
    data: string
}