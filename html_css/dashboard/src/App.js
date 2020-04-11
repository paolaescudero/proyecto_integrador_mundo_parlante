import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import BoxInfoProductQty from './components/BoxInfoProductQty';
import BoxInfoUsersQty from './components/BoxInfoUsersQty';
import BoxInfoProductPrice from './components/BoxInfoProductPrice';
import BoxLastItem from './components/BoxLastItem';
import BoxCategories from './components/BoxCategories';

function App() {
  return (
    <div id="wrapper">

		
		{/* Aca va el side Menu */}
    <SideMenu/>
				
		<div id="content-wrapper" className="d-flex flex-column">

			
			<div id="content">

				
				<NavBar/>
				

				
				<div className="container-fluid">

					
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					
					<div className="row">

						
		  <BoxInfoProductQty/>
          <BoxInfoProductPrice/>
          <BoxInfoUsersQty/>
            
            
           {/*  <BoxInfo
             color="border-left-success"
            icon="fas fa-dollar-sign fa-2x text-gray-300"
            text="Aca esta la pastita"
            quantity="$546.456" 
            />

						 <BoxInfo
            color="border-left-warning"
            icon="fas fa-user-check fa-2x text-gray-300"
            text="Cantidad de Usuarios"
            quantity="38"
            /> */}
				
					</div>

					
					<div className="row">
						
						{/* aca va la caja del ultimo item */}
            <BoxLastItem
            title="Último Producto Cargado"
            />
						
			{/* aca van las cajas de  categorias */}
              <BoxCategories/>

					</div>
				</div>
				
			</div>
			

			
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2020</span>
					</div>
				</div>
			</footer>
			

		</div>
		

	</div>
  );
}

export default App;
