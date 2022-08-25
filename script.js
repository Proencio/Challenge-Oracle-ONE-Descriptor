const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
// const imagem = "imagens/responsta.png";
document.getElementById("div-aparece").style.display = 'none';

// ------------------------------------ ENCRIPITAR MENSSAGENS -------------------------------------------\\
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    if (textoEncriptado != null && textoEncriptado != "") {
        mensagem.value = textoEncriptado
        mensagem.style.backgroundImage="none"
        aparece()
        desaparece()
    }
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];

    //deixa o caracter em minusculo
    stringEncriptada = stringEncriptada.toLowerCase();

    //loop para encriptar
    for(let i=0; i < matrizCodigo.length; i++) {
        //[i] (indice do caracter) - [0] index (sempre o primeiro)
        if(stringEncriptada.includes(matrizCodigo[i][0])) {

            //substitui o caracter do indice pela string do index. Ex:. i po imes
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}
//-------------------------------------------- FIM ENCRIPTAR ---------------------------------------------\\



// ------------------------------------ DESENCRIPITAR MENSSAGENS -------------------------------------------\\

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    if (textoEncriptado != null && textoEncriptado != "") {
        mensagem.value = textoEncriptado
        mensagem.style.backgroundImage="none"  
        desaparece();
        aparece()
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    // deixa o caracter minusculo
    stringDesencriptada = stringDesencriptada.toLowerCase();

    // loop para desencriptar
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}
//-------------------------------------------- FIM DESENCRIPITAR ---------------------------------------------\\


//botão copiar

function copiar() {
    const msg = document.querySelector(".mensagem");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
}

function aparece() {
    document.getElementById("div-aparece").style.display = 'block';
}

function desaparece() {
    document.getElementById("div-desaparece").style.display = 'none';
}