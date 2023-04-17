import Range from "./Range/Range";
import AccordionHeader from "./AccordionHeader/AccordionHeader";
import React from "react";
import { useTypedSelector } from "../../Hooks/useTypedSelector/useTypedSelector";
import { Alert, Collapse, Layout, Row, Space } from "antd";
import "./ViewPage.scss";
import { IChartList } from "../../types/IChartList";
const { Panel } = Collapse;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
  maxWidth: "1300px",
  margin: "0 auto",
};

function ViewPage() {
  const chartList = useTypedSelector((state) => state.content.chartList);
  return (
    <Layout className="viewPage__layout">
      <Layout style={contentStyle}>
        {chartList.map((item: IChartList, index: number) => (
          <Row gutter={[0, 10]} justify="center" key={index}>
            {item.isActive && (
              <div className="accordion">
                <AccordionHeader chart={item} index={index} item={item} />
              </div>
            )}
          </Row>
        ))}
      </Layout>
      {chartList.findIndex((item) => item.isActive) !== -1 ? (
        <Collapse
          className="viewPage__sider"
          bordered={false}
          defaultActiveKey={1}
        >
          <Panel
            header=""
            key={1}
            collapsible="header"
            className="viewPage__panel"
            forceRender={true}
          >
            <Range />
          </Panel>
        </Collapse>
      ) : (
        <Space direction="vertical" style={{ width: "50%", margin: "0 auto" }}>
          <Alert
            message="Select or add a chart on the settings page"
            type="warning"
            closable
          />
        </Space>
      )}
    </Layout>
  );
}

export default ViewPage;
