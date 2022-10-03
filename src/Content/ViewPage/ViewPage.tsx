import Range from './Range/Range';
import HighChart from './HighChart/HighChart';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import React from 'react';
import { useTypedSelector } from '../../Hooks/useTypedSelector/useTypedSelector';

export interface IChartListItem {
  name: string;
  nameEn: string;
  color: string;
  type: string;
  isActive?: boolean;
  isView?: boolean;
}

function ViewPage() {
  const chartList = useTypedSelector(state => state.content.chartList);

  return <div className="viewPage">
    <div className="container text-center">
      <div className="row">
        <div className="col">
          {chartList.map((item: IChartListItem, index: number) => {
            return <React.Fragment key={index}>
              {item.isActive && <div className="accordion">
                <div className="accordion-item">
                  <AccordionHeader chart={item} index={index} />
                  <div className={"accordion-collapse collapse" + (item.isView ? "" : "show")} aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                      <HighChart chart={item} />
                    </div>
                  </div>
                </div>
              </div>}
            </React.Fragment>
          })}
        </div>
        <div className="col-3">
          {chartList.length >0 && <Range />}          
        </div>
      </div>
    </div>
  </div>
}

export default ViewPage;