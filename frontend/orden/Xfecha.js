obtenerLibro()


let listadelibros=[]
async function obtenerLibro(){
    let url ="../../backend/controlador/controlador.php?funcion=xfecha";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    listadelibros=datos;
    mostrarLibro(datos) 
}
function mostrarLibro(libro){
    let tbodyElement = document.querySelector("#cuerpotablaObtener")
    tbodyElement.innerHTML=""
    for(let i=0; i < libro.length;i++){
     tbodyElement.innerHTML+=`
     <tr>
        <td>${libro[i].id}</td>
        <td>${libro[i].nombre}</td>
        <td>${libro[i].fecha}</td>
        <td>${libro[i].precio}</td>
        </tr>
        `;
    }
}
