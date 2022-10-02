
function ModalFooter({setNC,toggleState}){
    return <div className="modal-footer">
    <button type="button" className="btn btn-success" onClick={setNC}>Apply</button>
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleState}>Close</button>
</div>
}

export default ModalFooter;