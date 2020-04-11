/* const db = require('../database/models'); */
/* const db = fetch('http://localhost:3000/src/database/config/config.js').then(function(response){console.log(response)})
const sequelize = db.sequelize;  */

window.addEventListener("load", function(){
    /* console.log("cargo!!!!!!!!! >>>>>>>>>>>>>>>>"); */

    /* CON ESTO DE ACA ABAJO, agarra solo el primer checkbox */
var formMarca = document.querySelector("form");
let checkboxes = Array.from(formMarca.elements);
console.log(checkboxes);

for (const unCheck of checkboxes){
        unCheck.addEventListener('change', function(){
            if(this.checked) {
                /* console.log(unCheck.value); */
                this.form.submit()  
            } else {
                this.form.submit()                  
            }
        })
}


/* marca.addEventListener( 'change', function() {
    if(this.checked) {
        console.log("marca Checked");
        
    } else {
        console.log("marca UN-Checked");
    }
}); */
    
})

   
