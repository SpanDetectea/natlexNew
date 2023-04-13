import Range from './Range/Range';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import React from 'react';
import { useTypedSelector } from '../../Hooks/useTypedSelector/useTypedSelector';
import { IChartList } from '../../store/contentReducer';
import { Collapse, Layout, Row } from 'antd';
import './ViewPage.scss'
const { Panel } = Collapse;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
  maxWidth: '1300px',
  margin: '0 auto'
};

function ViewPage() {
  const chartList = useTypedSelector(state => state.content.chartList);
  return <Layout className='viewPage__layout'>
    <Layout style={contentStyle} >

      {chartList.map((item: IChartList, index: number) => {
        return <Row gutter={[0, 10]} justify='center' >
          {item.isActive && <div className="accordion">
            <AccordionHeader chart={item} index={index} item={item} />
          </div>}
        </Row>
      })}

    </Layout>
    <Collapse className='viewPage__sider' bordered={false} defaultActiveKey={1}>
      <Panel header='' key={1} collapsible='header' className='viewPage__panel' forceRender={true}>
        {chartList.length > 0 && <Range />}
      </Panel>
    </Collapse>
  </Layout>
}

export default ViewPage;