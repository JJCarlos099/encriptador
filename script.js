let inputTexto = document.querySelector(".input-text");
let mensaje = document.querySelector(".input-encriptado");
let inputfocused = "";


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    document.getElementById("muneco").style.display="none";
    document.getElementById("textS2").style.display="none";
    document.getElementById("input-text").value = "";
}


function encriptar(stringEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return stringEncriptar;

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    document.getElementById("muneco").style.display="none";
    document.getElementById("textS2").style.display="none";
    document.getElementById("input-text").value = "";
}


function desencriptar(stringEncriptar) {
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    for (let i = 0; i< matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return stringEncriptar;
}

function limpiar() {
    document.getElementById("input-text").value = "";
    document.getElementById("encriptado").value = "";
}


function copy() {

    var content = document.getElementById('encriptado');
    content.select();
    document.execCommand('copy');
    alert("Copied!");
}






