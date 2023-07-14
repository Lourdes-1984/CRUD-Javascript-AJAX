//mejorando el codigo con fecth api : llamada al back

const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id:uuid.v4() }),
  });
};
const eliminarCliente = (id) => {
   
   return fetch(`http://localhost:3000/perfil/${id}`,{

      method: "DELETE"
   }
   )
}
const detalleCliente = (id) => {
   return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta => respuesta.json()))
}
   
const actualizarCliente = (nombre,email,id) => {
   return fetch(`http://localhost:3000/perfil/${id}`,{
   method: 'PUT',
   headers: {
      "Content-Type": "application/json",
    },
   body: JSON.stringify({nombre,email})
   })
   .then(respuesta => respuesta)
   .catch(console.error())
}
 export const clientService = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
 }


// const listaClientes = () => {
//     const promesa = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest()
// //abri http (metodo , url) abrimos la url
//         http.open("GET", "http://localhost:3000/perfil")
// //hacemos la peticion
//         http.send()
// //carga los datos
//         http.onload = () => {
//             const response = JSON.parse(http.response) 
//             if(http.status >= 400){
//                 reject(response)
//             }
//             else{
//                 resolve(response)
     
//     }       }
// })
//    return promesa
// }



