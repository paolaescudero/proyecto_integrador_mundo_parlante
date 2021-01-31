import React, { Component } from 'react';

class BoxLastItem extends Component{

    /* --- Aca arrancamos dandole el estado */
    constructor(props){
        super(props);
        this.state= {
            name:"",
            price: "",
            description:"",
            image:""
        }
    }

    /* Funcion para llamar a la API, hacemos una func porq vamos a llamar a varias */

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json() )
            .then( data => consecuencia(data) )
            .catch( error => console.log(error))
    }
/* Funcion CONSECUENCIA */
    mostrarUltimoProducto = (data)=>{
        console.log(data);
        
       this.setState(
           {
            id: data.data[0].id,
            name: data.data[0].name,
            price: data.data[0].price,
            description: data.data[0].description,
            image: data.data[0].image
           }
        )  
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.traerUltimoProducto() 
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    traerUltimoProducto(){
        this.apiCall("http://mundoparlante.herokuapp.com/api/productos", this.mostrarUltimoProducto)
    }


    render(){
        return(
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ÚLTIMO PRODUCTO CARGADO</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                       
                         <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src={`http://mundoparlante.herokuapp.com/images/productos/${this.state.image}`} alt="image dummy"/> 

                    </div>
                    <h3>Nombre: {this.state.name}</h3>
                    <p>Precio: ${this.state.price}</p>
                    <p>{this.state.description}</p>
                    <a target="_blank" rel="nofollow" href={`http://mundoparlante.herokuapp.com/productos/detalle/${this.state.id}`}>Ver detalle de Producto</a>
                </div>
            </div>
        </div>
        )
    }
}

export default BoxLastItem;