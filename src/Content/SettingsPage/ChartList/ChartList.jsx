import useWindowDimensions from "../../../Hooks/windowDimensions/windowDimensions";
import { useDispatch } from 'react-redux';
import { toggleListActive } from "../../../store/actions";
import ChartListBtns from "./CharListBtns/ChartListBtns";

function ChartList({chart, index, editChart, delChart}){
    const { height, width } = useWindowDimensions();
    const dispatch=useDispatch();
    const toggleActive = (index) => dispatch(toggleListActive(index))

    return <div className="container text-center my-2" key={index}>
    {width >= '770' && <div className="row">
        <div className="col">
            <li key={index} onClick={() => toggleActive(index)} className={"list-group-item list-group-item-action list-group-item-info settings__list" + (chart.isActive ? " active" : "")}>{chart.name} </li>
        </div>
        <ChartListBtns className='col-md-auto ms-auto' editChart={editChart} delChart={delChart} index={index}/>
    </div>
    }
    {width < '770' && <>
        <div className="row">
            <div className="col">
                <li key={index} onClick={() => toggleActive(index)} className={"list-group-item list-group-item-action list-group-item-info settings__list" + (chart.isActive ? " active" : "")}>{chart.name} </li>
            </div>
        </div>
        <div className="row justify-content-between mt-2">
            <ChartListBtns className='col-4' editChart={editChart} delChart={delChart} index={index}/>
        </div>
    </>
    }
</div>
}

export default ChartList;