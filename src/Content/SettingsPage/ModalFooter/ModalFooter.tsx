import React from "react";
interface IModalFooter {
    setNC:()=>void;
    toggleState:()=>void;
    title:string;
    data: string;
}
function ModalFooter({setNC,toggleState,title,data}:IModalFooter){
    return <div className="modal-footer">
    <button type="button" className="btn btn-success" onClick={setNC} disabled={(title==='' || data==='') ? true: false}>Apply</button>
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleState}>Close</button>
</div>
}

export default ModalFooter;