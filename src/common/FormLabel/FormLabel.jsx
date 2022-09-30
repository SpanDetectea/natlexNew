import './FormLabel.scss'

function FormLabel({item}) {
    return <>
        <label className="form-label">{item.name}</label>
        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-describedby="basic-addon3" />
        </div>
    </>
}

export default FormLabel;