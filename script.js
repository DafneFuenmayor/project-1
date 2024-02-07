const form= document.getElementById('form');
const nombre= document.getElementById('nombre');
const parrafo= document.getElementById('alertas');

function validarFormulario() {
    let warning ="";
    let valido=true;
    parrafo.innerHTML="";

    if(nombre.value.length <4){
        warnings +='el nombre debe contener mas de 4 caracteres';
        valido=false;
    }
    if(!valido){
        parrafo.innerHTML= warnings;
    } else{
        parrafo.innerHTML="enviado";
    }
    return valido;
}

form.addEventListener("submit",(e) => 
    {if (validarFormulario()) {
    } else{
        e.preventDefault();
    }
    
});