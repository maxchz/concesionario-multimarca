import axios from 'axios';

//funcion para traer el token que esta guardado en el localstorage

const getToken=()=>{
    return `Bearer ${localStorage.getItem('token')}`;
}

// la funcion obtenerVehiculos recibe dos funciones (callbacks) como parametros
export const obtenerVehiculos=async(sucessCallback, errorCallback)=>{
    // En la url coloco el puerto donde esta mi backend
    const options = {
        method: 'GET',
        url:'http://localhost:5000/vehiculos/',
        headers: {
            Authorization: getToken(),
          }
};
    await axios
    //cuando el request da un resultado se ejecuta la funcion que esta en then y si request da un error se ejecuta la funcion del catch
    //la funcion secessCalback se ejecuta en caso de respuesta positiva y errorCallback en caso negtivo 
    .request(options)
    .then(sucessCallback)
    .catch(errorCallback);
};

export const crearVehiculo= async (data,sucessCallback, errorCallback)=>{
    const options={method: 'POST',
    url: 'http://localhost:5000/vehiculos/nuevo/',
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
    data,
};
    await axios
    .request(options)
    .then(sucessCallback)
    .catch(errorCallback);

};

export const editarVehiculo = async (id,data,sucessCallback, errorCallback)=>{
    const options={
      method: 'PATCH',
      url: `http://localhost:5000/vehiculos/${id}/`,
      headers: {'Content-Type': 'application/json',Authorization: getToken()},
      data,
    };
    await axios
    .request(options)
    .then(sucessCallback)
    .catch(errorCallback);

};

export const eliminarVehiculo= async (id,sucessCallback, errorCallback)=>{
    const options= {
     method: 'DELETE',
     url: `http://localhost:5000/vehiculos/${id}/`,
     headers: {'Content-Type': 'application/json',Authorization: getToken()},
    };
    await axios
    .request(options)
    .then(sucessCallback)
    .catch(errorCallback);
};

// CRUD PARA USUARIOS
export const obtenerUsuarios= async (sucessCallback, errorCallback)=>{
     const options={
         method: 'GET',
         url: 'http://localhost:5000/usuarios',
         headers: {
            Authorization: getToken(),
          }
        };
     await axios
    .request(options)
    .then(sucessCallback)
    .catch(errorCallback);
 }
// CRUD PARA VENTAS
//  Api para mandar los datos creados en generar nueva venta
export const crearVenta= async (data,sucessCallback, errorCallback)=>{
    const options={
        method:'POST',
        url: 'http://localhost:5000/ventas/nuevo/',
        headers: {'Content-Type': 'application/json',Authorization: getToken()},
        data};
    await axios
    .request(options)
    .then(sucessCallback)
    .catch(errorCallback);

};

