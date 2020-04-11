window.addEventListener("load", function(){

    //capturo el item que contiene toda la seccion
    var contenido = document.getElementById('contenido-seccion');

    //capturo el boton que va a cambiar la vista
    var btnVista = document.getElementById('btn-vista');


    //le digo q cuando apriete el btn haga lo que esta entre {}
    btnVista.addEventListener('click', function () {
        
        //aca va lo que va a hacer el boton
        contenido.innerHTML = '<p>le meto un P para probar a ver que pasa con el user id a ver si funciona: <%= oneUser.id %></p>'
        
	});
    
})
