import React from 'react';

export default function Search({onTextChange,onCancelClick,placeholder,search}) {
    return (

        <div className="row">
            <div className="col-md-10">
                <input type="text" className="form-control form-control-lg" onChange={onTextChange} placeholder={placeholder} value={search} />
            </div>
            <div className="col-md-2">
                <button className="btn btn-info btn-lg btn-block" onClick={onCancelClick}>Clear</button>
            </div>
        </div>
    )
}

