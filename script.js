const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-encriptado");
const imgVisual = document.querySelector(".img-visual");



function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    //comentario
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