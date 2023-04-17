import React, { useEffect } from "react";
import { useState } from "react";
import "./ModalBody.scss";
import { addNewChart, editChart } from "../../../store/contentReducer";
import { useTypedDispatch } from "../../../Hooks/useTypedDispatch";
import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { IModalBody } from "../../../types/IModalBody";
import { keyHandler } from "../../../common/keyHandler";

type RequiredMark = boolean | "optional";
function ModalBody({ toggleIsModalVisible, chartValues }: IModalBody) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState("");
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");
  useEffect(() => {
    setTitle(chartValues.title);
    setColor(chartValues.color);
    setType(chartValues.type);
    setData(chartValues.data);
  }, [chartValues]);

  const dispatch = useTypedDispatch();
  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const setChartTitle = (value: string) => setTitle(value);
  const setChartColor = (color: string) => setColor(color);
  const setChartType = (value: string) => setType(value);
  const setChartData = (value: string) => setData(value);
  const addNC = () => {
    Number.isInteger(chartValues.id)
      ? dispatch(
          editChart({
            id: chartValues.id,
            name: title,
            color: color,
            type: type,
            data: data,
          })
        )
      : dispatch(
          addNewChart({
            name: title,
            color: color,
            type: type,
            isActive: true,
            isView: true,
            nameEn: "",
            data: data,
          })
        );
    toggleIsModalVisible();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label="Chart title" required tooltip="Enter your chart name">
        <Input
          placeholder="my new chart"
          onInput={(e) => setChartTitle((e.target as HTMLInputElement).value)}
          value={title}
        />
      </Form.Item>
      <Form.Item label="Data" tooltip="Enter chart data separated by commas">
        <Input
          placeholder="1,2,3,4"
          onKeyDown={keyHandler}
          value={data}
          onInput={(e) => setChartData((e.target as HTMLInputElement).value)}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={color}
          style={{ width: 80, margin: "0 8px" }}
          onChange={setChartColor}
          className="modalBody__color"
        >
          <Option value="#dc3545">Red</Option>
          <Option value="#0d6efd">Blue</Option>
          <Option value="#198754">Green</Option>
          <Option value="#ffc107">Yellow</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Select
          value={type}
          style={{ width: 80, margin: "0 8px" }}
          onChange={setChartType}
          className="modalBody__color"
        >
          <Option value="line">Line</Option>
          <Option value="column">Column</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          onClick={addNC}
          disabled={
            title === "" || data === "" || color === "" || type === ""
              ? true
              : false
          }
        >
          Apply
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ModalBody;
