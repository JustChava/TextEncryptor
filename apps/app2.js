var contador=0;
var contador2=0;
var contador3=0;
var t=0;
var tamaño=0;
const Encriptador=[27];
const codigoEncriptado=[];
const codigoDesencriptado=[];
const vectorEncriptado=[];
const vectorAlfabeto=[["a","*p{"],["b","5rt-"],["c","jgs"],["d","$=rf"],["e",",?!"]
,["f","yjiu"],["g","¿ew"],["h","ccz}"],["i","9+/"],["j","0opd"],["k","qqk"],["l","e)71"],["m","nbx"]
,["n","[ñi&"],["ñ","#$]"],["o","$g11"],["p","4lt"],["q","hlap"],["r","g5r"],["s","823w"],["t","}g7"]
,["u","ft4i"],["v","wi%"],["w","efy¡"],["x","sui"],["y","love"],["z","fat"],[" ","j50k"]];
const vectorSuma=[];
let textoEncriptado ="";
let textoDesencriptado ="";
var prueba=0;
let texto1="";
let letra="";
var identificadorLetra=0;


function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

asignarTextoElemento(".instrucciones","Ingresa tu texto y presiona el botón adecuado debajo");
asignarTextoElemento(".label","Ingresa aquí el texto");
asignarTextoElemento(".derecha__Resultado"," ");
asignarTextoElemento(".pie","Realizado por Salvador Contreras 2024");


function encriptarTexto (){
    textoEncriptado="";
    texto1="";
    textoDesencriptado="";
    texto1=(document.getElementById('textoUsuario').value);
    console.log(texto1.length);
    for (contador = 0, tamaño=0; contador<texto1.length; contador++){
        identificadorLetra=texto1.charCodeAt(contador);
        letra=String.fromCharCode(identificadorLetra);
        vectorSuma[contador]=letra;
    }
    for (contador = 0; contador<texto1.length; contador++){
        for(contador2=0;contador2<=27;contador2++){
            if(vectorSuma[contador]==vectorAlfabeto[contador2][0]){
                textoEncriptado+=vectorAlfabeto[contador2][1];
            }
        }
    }
    if(textoEncriptado!=""){
        document.getElementById('img').style.display='none';
    }
    asignarTextoElemento(".instrucciones","A la derecha se muestra el texto encriptado");
    asignarTextoElemento('.derecha__Resultado',textoEncriptado);
    let button = document.getElementById('boton3');
    button.textContent="Copiar";
    textoDesencriptado="";
    letra="";
}

function desencriptarTexto(){
    textoDesencriptado="";
    t=0;
    texto1="";
    texto1=(document.getElementById('textoUsuario').value);
    for(contador=0;contador<texto1.length;contador+=t){
        t=4;
        for (contador2 = contador,letra=""; contador2<contador+3; contador2++){
            identificadorLetra=texto1.charCodeAt(contador2);
            letra+=String.fromCharCode(identificadorLetra);
        }
        console.log(letra);
        for(contador2=0;contador2<=26;contador2+=2){
            if(letra==vectorAlfabeto[contador2][1]){
                letra=vectorAlfabeto[contador2][0];
                t=3;
                textoDesencriptado+=letra;
            }
        }
        if(t!=3){
            for (contador2 = contador,letra=""; contador2<contador+4; contador2++){
                identificadorLetra=texto1.charCodeAt(contador2);
                letra+=String.fromCharCode(identificadorLetra);
            }
            console.log(letra);
            for(contador2=1;contador2<=27;contador2+=2){
                if(letra==vectorAlfabeto[contador2][1]){
                    letra=vectorAlfabeto[contador2][0];
                    textoDesencriptado+=letra;
                    t=4;
                }
            }
        }
    }
    if(textoDesencriptado!=""){
        document.getElementById('img').style.display='none';
    }
    asignarTextoElemento(".instrucciones","A la derecha se muestra el texto desencriptado");
    asignarTextoElemento('.derecha__Resultado',textoDesencriptado);
    let button = document.getElementById('boton3');
    button.textContent="Copiar";
    textoEncriptado="";
}

function limpiarCaja (){
    asignarTextoElemento(".instrucciones","Ingresa tu texto y escoge la opción adecuada debajo");
    asignarTextoElemento(".derecha__Resultado"," ");
    let button = document.getElementById('boton3');
    button.textContent="Copiar";
    document.getElementById('img').style.display='block';
    textoEncriptado="";
    textoDesencriptado="";
}

function copiarTexto(){
    texto1="";
    let button = document.getElementById('boton3');
    if(textoEncriptado!=""){
        
        navigator.clipboard.writeText(textoEncriptado);
        button.textContent="Copiado";
    }
    else if(textoDesencriptado !=""){

        navigator.clipboard.writeText(textoDesencriptado);
        button.textContent="Copiado";
    }
    textoEncriptado="";
    textoDesencriptado="";
}