
import { useDispatch } from 'react-redux';
import { toggleViewAccordion } from '../../../store/actions';

function AccordionHeader({ chart, index }) {
    const dispatch = useDispatch();
    const toggleAccordion = (index) => dispatch(toggleViewAccordion(index))

    return <h2 className="accordion-header" onClick={() => toggleAccordion(index)}>
        <button className={"accordion-button" + (chart.isView ? " collapsed" : "")} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {chart.name}
        </button>
    </h2>
}

export default AccordionHeader;