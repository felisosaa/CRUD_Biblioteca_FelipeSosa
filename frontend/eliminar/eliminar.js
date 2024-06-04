window.onload=()=>{
    obtenerLibro();
  }


let listadelibros=[]
async function obtenerLibro(){
    let url ="../../backend/controlador/controlador.php?funcion=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    listadelibros=datos;
    console.log(datos);
    mostrarLibro(datos) 
}
function mostrarLibro(libro){
    let tbodyElement = document.querySelector("#cuerpotablaEliminar")
    tbodyElement.innerHTML=""
    for(let i=0; i < libro.length;i++){
     tbodyElement.innerHTML+=`
     <tr>
        <td>${libro[i].id}</td>
        <td>${libro[i].nombre}</td>
        <td>${libro[i].fecha}</td>
        <td>${libro[i].precio}</td>
        <td><button onclick="eliminarlibro('${libro[i].id}')">eliminar</button></td>
        </tr>
        `;
    }
}
async function eliminarlibro(id){
    let formdata = new FormData();
    formdata.append("id",id);
    let  url='http://localhost/CRUD_Biblioteca_FelipeSosa/backend/controlador/controlador.php?funcion=eliminar';      
        
        let config = {
            method: 'POST', 
            body: formdata
        };

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();

        if(datos){
            alert("se elimino el libro")
            obtenerLibro()
        }
        else{
            alert("no se elimino el libro")
        }
}
