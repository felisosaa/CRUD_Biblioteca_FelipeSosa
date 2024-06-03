window.onload=()=>{
    obtenerLibro();
    modificarLibro();
  }

  async function obtenerLibro(){ 
    let url = "../../backend/controlador/controlador.php?funcion=obtener"
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos);
   MostrarLibro(datos)

  }

  function MostrarLibro(libro){
   let tbodyElement = document.querySelector("#TablaLibro")
   for (let i=0; i < libro.length; i++){
       tbodyElement.innerHTML+=` 
           <tr>
               <td>${libro[i].id}</td>
               <td>${libro[i].nombre}</td>
               <td>${libro[i].fecha}</td>
               <td>${libro[i].precio}</td>
               <td><button onclick="CargarDatos('${libro[i].nombre}', '${libro[i].fecha}', '${libro[i].precio}')">Seleccionar</button></td>
       </tr>
       `;

    }
  }
    function CargarDatos(nombre, fecha, precio){

      let nombreInput = document.querySelector("#nombre");
        nombreInput.value = nombre;

      let fechaInput = document.querySelector("#fecha");
        fechaInput.value = fecha;

      let precioInput = document.querySelector("#precio");
        precioInput.value = precio;
  }

   async function modificarLibro(){
    let formElement = document.querySelector("#formu")

    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "../../backend/controlador/controlador.php?funcion=modificar"

        let config = {
            method: 'POST',
            body: formData
        }

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        location.reload();
        console.log(datos);
  }
}