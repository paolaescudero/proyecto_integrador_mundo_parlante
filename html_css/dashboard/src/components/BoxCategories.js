import React from 'react';
import ItemCategory from '../components/ItemCategory'

function BoxCategories(props){

    return(
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">

                    <ItemCategory
                        title="Parlantes"
                    />
                   
                   <ItemCategory
                        title="Subwoofer"
                    />
                    <ItemCategory
                        title="Auriculares"
                    />
                     <ItemCategory
                        title="Sin Stock"
                    />
                     <ItemCategory
                        title="Vintage"
                    />
                    <ItemCategory
                        title="Monitores"
                    />
                </div>
            </div>
        </div>
    </div>
    )

}

export default BoxCategories;