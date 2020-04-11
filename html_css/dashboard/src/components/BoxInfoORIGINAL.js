import React from 'react';

function BoxInfo(props){

    return(
        <div className="col-md-4 mb-4">
        <div className={`card ${props.color} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">{props.text}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
                    </div>
                    <div className="col-auto">
                        <i className={props.icon}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default BoxInfo;