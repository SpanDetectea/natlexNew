import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleViewAccordion } from '../../../store/actions';
import { IHighChart } from '../HighChart/HighChart';

interface IAccordionHeader extends IHighChart {
    index: number;
}

function AccordionHeader({ chart, index }:IAccordionHeader) {
    const dispatch = useDispatch();
    const toggleAccordion = (index: number) => dispatch(toggleViewAccordion(index))

    return <h2 className="accordion-header" onClick={() => toggleAccordion(index)}>
        <button className={"accordion-button" + (chart.isView ? " collapsed" : "")} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {chart.name}
        </button>
    </h2>
}

export default AccordionHeader;