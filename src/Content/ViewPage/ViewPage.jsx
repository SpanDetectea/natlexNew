import React from 'react'
import { useSelector } from 'react-redux';
import Range from './Range/Range';
import HighChart from './HighChart/HighChart';
import AccordionHeader from './AccordionHeader/AccordionHeader';

function ViewPage() {
  const chartList = useSelector(state => state.content.chartList);

  return <div className="viewPage">
    {chartList.map((item, index) => {
      return <React.Fragment key={index}>
        {item.isActive && <div className="accordion">
          <div className="accordion-item">
            <AccordionHeader chart={item} index={index}/>
            <div className={"accordion-collapse collapse" + (item.isView ? "" : "show")} aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                <HighChart chart={item}/>
              </div>
            </div>
          </div>
        </div>}
      </React.Fragment>
    })}
    <Range />
  </div>
}

export default ViewPage;