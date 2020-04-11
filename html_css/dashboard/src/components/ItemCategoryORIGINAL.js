import React from 'react';

function ItemCategory(props) {

    return(
        <div className="col-lg-6 mb-4">
        <div className={`card ${props.color} text-white shadow`}>
            <div className="card-body">
               {props.title}
            </div>
        </div>
        </div>
    )

}

export default ItemCategory;