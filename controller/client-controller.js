import { clientService } from "../service/client-service.js";


const crearNuevaLinea = (nombre , email, id) =>{
  
    const linea = document.createElement('tr')

    const contenido = ` 
<td class="td" data-td>${nombre}</td>
<td>${email}</td>
<td>
  <ul class="table__button-control">
    <li>
      <a
        href="../screens/editar_cliente.html?id=${id}"
        class="simple-button simple-button--edit"
        >Editar</a
      >
    </li>
    <li>
      <button
        class="simple-button simple-button--delete"
        type="button"
        id="${id}"
      >
        Eliminar
      </button>
    </li>
  </ul>
</td>
`;

  linea.innerHTML = contenido
  const boton = linea.querySelector('button')
  boton.addEventListener('click' ,() =>  {
    const id = boton.id
    clientService
     .eliminarCliente(id)
    .then((respuesta ) => {
      console.log(respuesta)
    })
    .catch((error) => alert('ocurrio un error'))
  }) 
    return linea
}

const table = document.querySelector('[data-table]')
//mostar o generar la informacion
clientService.listaClientes()
.then((data) => {
    
    data.forEach( ({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre, email, id)
        table.appendChild(nuevaLinea)
    });
})
.catch((error) => alert('Ocurrio un error'))

