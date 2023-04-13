import { IActionEdit } from "./IActionEdit"

export interface IModalBody {
    toggleIsModalVisible: () => void
    chartValues: IActionEdit
}