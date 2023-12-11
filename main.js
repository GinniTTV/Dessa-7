// Ej n2 :
// callback
document.addEventListener("DOMContentLoaded", function() {
console.log("Contenido del DOM cargado");

// Ej n3:
//value txt area
const msg = document.getElementById('origen').value =
`<p>Este contenido <strong> está listo</strong><br>para ser editado y pasarlo abajo. </p>`;
    
// Ej n4:
//habilitación 

let e = document.getElementsByTagName("input");
let bo = document.getElementsByTagName("button")[0];
let click = document.getElementById('origen');
    
click.addEventListener ("click", function(a){
habilitar(e,bo);

})
    
function habilitar(e, bo) {

 for (let i = 0; i < e.length; i++) {
 e[i].disabled =false
 }
 bo.disabled =false
    }
    
// Ej n5:
// Programación de botones
let one = document.getElementById("btn-reemplazar");
one.addEventListener("click", reemplazar); 
function reemplazar() {
document.getElementById('destino').innerHTML =`${msg}`;
document.getElementById("origen").value = "";
    }
    
let arrayAgregar = document.getElementsByClassName("btn-agregar");
    
function forClass() {
for (let i = 0; i < arrayAgregar.length; i++) {
      arrayAgregar[i].addEventListener("click", function(event) {
        switch (i) {
                    case 0:
                        document.getElementById('destino').innerHTML = `${msg.repeat(1)}`;
                        break;
                    case 1:
                        document.getElementById('destino').innerHTML = `${msg.repeat(5)}`;
                        break;
                    case 2:
                        document.getElementById('destino').innerHTML = `${msg.repeat(10)}`;
                        break;
                    case 3:
                        let n = prompt("Elegí la cantidad de veces que se repita el texto");
                        if (n !== null) {
                            document.getElementById('destino').innerHTML = `${msg.repeat(parseInt(n))}`;
                        }
                        break;
                    default:
                        break;
                }
            });
        }
    }
        forClass();
    
// Eje n6:
//vaciar, mayu, minus
    let botonVaciar = document.querySelector(".btn-vaciar");
    botonVaciar.addEventListener("click", vaciar);
    function vaciar() {
        document.getElementById("destino").innerHTML = "";
    }
    
    let botonMayuscula = document.querySelector(".btn-convertir-a-mayusculas");
    botonMayuscula.addEventListener("click", mayuscula);
    function mayuscula() {
        let contenidoMsg = document.getElementById("destino");
        contenidoMsg.innerHTML = contenidoMsg.innerHTML.toUpperCase();
    }
    
    let botonMinuscula = document.querySelector("button");
    botonMinuscula.addEventListener("click", minuscula);
    function minuscula() {
        let contenidoMsg = document.getElementById("destino");
        contenidoMsg.innerHTML = contenidoMsg.innerHTML.toLowerCase();
    }
    
// Eje n7
//html collec
    var listaItems = document.getElementsByTagName("li");
    
    for (var i = 0; i < listaItems.length; i++) {
        var contenidoActual = listaItems[i].innerHTML;
        listaItems[i].innerHTML = "[Ok]" + contenidoActual;
      }
    
    
      
    }
    );