
function ModalHeader({toggleState}) {
    return <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Adding a new chart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" onClick={toggleState}></button>
    </div>
}

export default ModalHeader;