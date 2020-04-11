import React, {Component} from 'react';

class ItemCategory extends Component {

    constructor(props){
        super(props);
            this.state ={
                title: props.title,
                color : "bg-success",
        }
    }

    cambiarColor(){

        if (this.state.color == "bg-success"){
        this.setState({
            
            color: "bg-primary"
        })
        } else{
            this.setState({
                color: "bg-success"
            })
        }
    }
    
    
  
    render(){  
        return(
            <div className="col-lg-6 mb-4">
                
            <button onClick={ () => this.cambiarColor()} className={`card ${this.state.color} text-white btn-block shadow`}>
                <div className="card-body">
                {this.state.title}
                </div>
            </button>

            </div>
        )
    }

}

export default ItemCategory;