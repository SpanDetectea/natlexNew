import React from "react";
import "./SettingsPage.scss";
import { useState } from "react";
import ModalBody from "./ModalBody/ModalBody";
import { useTypedSelector } from "../../Hooks/useTypedSelector/useTypedSelector";
import {
  deleteChart,
  toggleListActive,
} from "../../store/contentReducer";
import { Button, Col, Modal, Row } from "antd";

import { useTypedDispatch } from "../../Hooks/useTypedDispatch";
import { IActionEdit } from "../../types/IActionEdit";
import { IChartList } from "../../types/IChartList";

function Settings() {
  const chartList = useTypedSelector((state) => state.content.chartList);
  const forecastDays = useTypedSelector((state) => state.content.forecastDays);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chartValues, setChartValues] = useState({
    title: "",
    color: "",
    type: "",
    data: "",
    id: null,
  });
  const dispatch = useTypedDispatch();

  const toggleIsModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };
  const actionEditOrAdd = (action: string, id?: number): IActionEdit => {
    if (action === "add") {
      return {
        title: "",
        color: "",
        type: "",
        data: "",
        id: null,
      };
    }
    return {
      title: chartList[id].name,
      color: chartList[id].color,
      type: chartList[id].type,
      data: forecastDays
        .map((item) => item.day[chartList[id].nameEn] + "")
        .join(","),
      id: id,
    };
  };
  const addChart = () => {
    toggleIsModalVisible();
    setChartValues(actionEditOrAdd("add"));
  };
  const editChart = (index?: number): void => {
    toggleIsModalVisible();
    setChartValues(actionEditOrAdd("edit", index));
  };
  const toggleActive = (index: number) => dispatch(toggleListActive(index));
  const delChart = (id: number) => dispatch(deleteChart(id));
  return (
    <div className="settings">
      {chartList.map((item: IChartList, index: number) => (
        <Row className="settings__row" justify="center" key={index}>
          <Col
            span={18}
            xs={{ span: 10 }}
            onClick={() => toggleActive(index)}
            className={
              chartList[index].isActive
                ? "settings__list view"
                : "settings__list hidden"
            }
          >
            {item.name}
          </Col>
          <Col span={3} xs={{ span: 5 }} md={{ span: 3 }}>
            <Button
              className="settings__row__col"
              type="primary"
              size="middle"
              onClick={() => editChart(index)}
            >
              Edit
            </Button>
          </Col>
          <Col span={3} xs={{ span: 5 }} md={{ span: 3 }}>
            <Button
              className="settings__row__col"
              size="middle"
              danger
              onClick={() => delChart(index)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      ))}
      <Button shape="round" type="primary" size="large" onClick={addChart}>
        Add chart
      </Button>
      <Modal
        title="Adding a new chart"
        centered
        footer={null}
        open={isModalVisible}
        onOk={toggleIsModalVisible}
        onCancel={toggleIsModalVisible}
      >
        <ModalBody
          toggleIsModalVisible={toggleIsModalVisible}
          chartValues={chartValues}
        />
      </Modal>
    </div>
  );
}

export default Settings;
