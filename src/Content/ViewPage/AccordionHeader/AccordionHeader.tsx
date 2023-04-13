import React from 'react';
import {  toggleViewAccordion } from '../../../store/contentReducer';
import { useTypedDispatch } from '../../../Hooks/useTypedDispatch';
import { Collapse } from 'antd';
import HighChart from '../HighChart/HighChart';
import { IAccordionHeader } from '../../../types/IAccordionHeader';
const { Panel } = Collapse;


function AccordionHeader({ chart, index, item }: IAccordionHeader) {
    const dispatch = useTypedDispatch();
    const toggleAccordion = (index: number) => dispatch(toggleViewAccordion(index))

    return <Collapse style={{ width: '500px' }} defaultActiveKey={chart.isView ? index: null} onChange={() => toggleAccordion(index)}>
        <Panel header={chart.name} key={index} >
            <HighChart chart={item} />
        </Panel>
    </Collapse>
}

export default AccordionHeader;