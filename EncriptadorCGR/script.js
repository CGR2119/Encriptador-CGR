const ingreso = document.querySelector(".area-ingreso");
const mensaje = document.querySelector(".area-salida");
const copiador = document.querySelector(".copiar");
copiador.style.display = "none"

function validar() {
    let textoIngresado = document.querySelector(".area-ingreso").value;
    let validador = /^[a-z\s]*$/.test(textoIngresado);

    if (!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos.");
        return false; // Evitar la recarga de la página
    }

    return true;
}
function botonEncriptar(){
    if(validar(true)) {
        const textoEncriptado = encriptar(ingreso.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        ingreso.value = "";
        copiador.style.display = "block"
    
    }
}

function encriptar(stringEncriptada){
    let matrizEncriptadora = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizEncriptadora.length; i++){
        if(stringEncriptada.includes(matrizEncriptadora[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizEncriptadora[i][0], matrizEncriptadora[i][1])

        }

    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(ingreso.value)
    mensaje.value = textoEncriptado
    ingreso.value = "";
    mensaje.style.backgroundImage = "none";
    copiador.style.display = "block";

}



function desencriptar(stringDesencriptada){
    let matrizEncriptadora = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizEncriptadora.length; i++){
        if(stringDesencriptada.includes(matrizEncriptadora[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizEncriptadora[i][1] , matrizEncriptadora[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto copiado éxitosamente")
}