var contador=0;
var contador2=0;
var tamaño=0;
const Encriptador=[27];
const codigoEncriptado=[];
const codigoDesencriptado=[];
const vectorEncriptado=[];
const vectorAlfabeto=[];
const vectorSuma=[];
let textoEncriptado ="";
let textoDesencriptado ="";
var prueba=0;
let texto1="";
var identificadorLetra=0;


function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

asignarTextoElemento(".instrucciones","Ingresa tu texto y presiona el botón adecuado debajo");
asignarTextoElemento(".label","Ingresa aquí el texto");
asignarTextoElemento(".derecha__Resultado","");
asignarTextoElemento(".pie","Realizado por Salvador Contreras 2024");

function generaEncriptador (){

    for (contador = 0; contador<=(124-97); contador++)
    {
        Encriptador[contador] = [Math.floor(Math.random()*(122 - 96)) + 97,Math.floor(Math.random()*(122 - 96)) + 97,Math.floor(Math.random()*(122 - 96)) + 97];
        vectorSuma[contador] = Encriptador[contador][0]+Encriptador[contador][1]+Encriptador[contador][2]; 
        while(vectorAlfabeto.includes(vectorSuma[contador])){
            Encriptador[contador] = [Math.floor(Math.random()*(122 - 96)) + 97,Math.floor(Math.random()*(122 - 96)) + 97,Math.floor(Math.random()*(122 - 96)) + 97];
            vectorSuma[contador] = Encriptador[contador][0]+Encriptador[contador][1]+Encriptador[contador][2];
        }
        vectorAlfabeto[contador]=vectorSuma[contador];
    }
    console.log(Encriptador);
    console.log(vectorAlfabeto)
}
generaEncriptador ();

function tomarTextoEncriptar(){
    texto1="";
    textoEncriptado="";
    texto1=(document.getElementById('textoUsuario').value);
    encriptarTexto(texto1);
    textoEncriptado=resultadoTexto();
    document.getElementById('img').style.display='none';

    asignarTextoElemento(".instrucciones","A la derecha se muestra el texto encriptado");
    asignarTextoElemento('.derecha__Resultado',textoEncriptado);
    let button = document.getElementById('boton3');
    button.textContent="Copiar";
    textoDesencriptado="";
    
}

function tomarTextoDesencriptar(){
    texto1="";
    textoDesencriptado="";
    texto1=(document.getElementById('textoUsuario').value);
    desencriptadorNumerico(texto1);
    textoDesencriptado=desencriptadorTexto();
    document.getElementById('img').style.display='none';

    asignarTextoElemento(".instrucciones","A la derecha se muestra el texto desencriptado");
    asignarTextoElemento('.derecha__Resultado',textoDesencriptado);
    let button = document.getElementById('boton3');
    button.textContent="Copiar";
    textoEncriptado="";
}

function encriptarTexto (texto1){
    for (contador = 0, tamaño=0; contador<texto1.length; contador++){
        identificadorLetra=texto1.charCodeAt(contador);
        identificadorLetra=identificadorLetra-97;
        if(identificadorLetra==-65){
            codigoEncriptado[contador]=Encriptador[26];
        }
        if(identificadorLetra==144){
            codigoEncriptado[contador]=Encriptador[27];
        }
        if(identificadorLetra!=-65 && identificadorLetra!=144){

            codigoEncriptado[contador]=Encriptador[identificadorLetra];
        }
        tamaño++;
    }
}

function resultadoTexto(){
    
    for(contador2 = 0; contador2 < tamaño; contador2 ++){
        textoEncriptado+=String.fromCharCode(codigoEncriptado[contador2][0]);
        textoEncriptado+=String.fromCharCode(codigoEncriptado[contador2][1]);
        textoEncriptado+=String.fromCharCode(codigoEncriptado[contador2][2]);
    }
    console.log(textoEncriptado);
    return(textoEncriptado);
}

function desencriptadorNumerico(textoEncriptado){
    vectorEncriptado.length=textoEncriptado.length;
    for(contador=0, identificadorLetra=0;contador<Math.floor((textoEncriptado.length)/3);contador++){
        for(contador2=(contador)*3;contador2<=((contador)*3+2);contador2++){
            identificadorLetra+=textoEncriptado.charCodeAt(contador2);
        }
        vectorEncriptado[contador]=identificadorLetra;
        identificadorLetra=0;
    }
    vectorEncriptado.length=Math.floor((textoEncriptado.length)/3);
    console.log(vectorEncriptado);
}

function desencriptadorTexto(){
    for(contador=0;contador<vectorEncriptado.length;contador++){
        for(contador2=0;contador2<28;contador2++){
            if(vectorAlfabeto[contador2]==vectorEncriptado[contador]){
                if(contador2==26){
                    if(contador2==26)
                        textoDesencriptado+=" ";
                }
                else if(contador2==27)
                    textoDesencriptado+="ñ";
                else if (contador2!=26 && contador2!=27)
                    textoDesencriptado+=String.fromCharCode(contador2+97);
            }
        }
    }
    console.log(textoDesencriptado);
    return(textoDesencriptado);

}

function limpiarCaja (){
    asignarTextoElemento(".instrucciones","Ingresa tu texto y escoge la opción adecuada debajo");
    asignarTextoElemento(".derecha__Resultado",".");
    let button = document.getElementById('boton3');
    button.textContent="Copiar";
    document.getElementById('img').style.display='block';
    textoEncriptado="";
    textoDesencriptado="";
}

function copiarTexto(){
    let button = document.getElementById('boton3');
    if(textoEncriptado!=""){
        
        navigator.clipboard.writeText(textoEncriptado);
        button.textContent="Copiado";
    }
    else if(textoDesencriptado !=""){

        navigator.clipboard.writeText(textoDesencriptado);
        button.textContent="Copiado";
    }
}