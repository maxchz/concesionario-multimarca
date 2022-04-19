import React, {useEffect, useState} from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// realizar un formulario que pida a usuario su edad y muestre si es mayor de edad o no

const vehiculosBackend=[
  {
    nombre:"Corolla",
    marca:"Toyota",
    modelo:2014
  },
  {
    nombre:"Duster",
    marca:"Renault",
    modelo:2016
  },
  {
    nombre:"Corsa",
    marca:"Wolkswagen",
    modelo:2019
  },
  {
    nombre:"S10",
    marca:"Chevrolet",
    modelo:2021
  },
  {
    nombre:"Clio",
    marca:"Renault",
    modelo:2011
  },
  {
    nombre:"Creta",
    marca:"Hyunday",
    modelo:2022
  },
  


];

const Vehiculos = () => {

  const [mostrarTabla , setMostrarTabla]=useState(true);
  const [textBoton, setTextBoton]=useState('Crear Nuevo Vehiculo');
  const [vehiculos, setVehiculos]=useState([]);
  const [colorBoton, setColorBoton]=useState('violet');


  useEffect(()=>{setVehiculos(vehiculosBackend);
  },[]);

  useEffect ( ()=>{    
    if(mostrarTabla){
      setTextBoton('Crear Nuevo Vehículo');
      setColorBoton('violet');
    }else{ 
      setTextBoton('Mostrar todos los vehículos');
      setColorBoton('violet');
      }
  }, [mostrarTabla])



  return (
    <PrivateLayout>
      <div className="flex flex-col  w-full h-full justify-start items-center p-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-violet-600">Página de administracion de vehículos</h2>

          <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={`text-white  bg-${colorBoton}-600 p-2 rounded-full mx-auto my-8 self-end`}>
            {textBoton}
          </button>
        </div>
        

        {mostrarTabla?(<TablaVehiculos listaVehiculos={vehiculos}/>):(
        <FormularioCrearVehiculos
           funcionParaLaTabla={setMostrarTabla} 
           listaVehiculos={vehiculos}
           funcionParaAgregarVehiculos={setVehiculos}/>)}




        <ToastContainer position="bottom-center" autoClose={5000}/>

      </div>

    </PrivateLayout>
  );
};

const TablaVehiculos =({listaVehiculos})=>{
  // useEffect (() => {
  //   console.log("Este es el listado de vehiculos en el componente de table", listaVehiculos)
  // }, [listaVehiculos]);


  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-normal text-violet-600">Todos los Vehiculos</h2>
      <table className="text-center">
        <thead>
          <tr>
            <th>Nombre del vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>

          </tr>
        </thead>
        <tbody>

          {listaVehiculos.map((vehiculo)=>{
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
                             
            )
          })}
          {/* <tr>
            <td>SRV4</td>
            <td>Toyota</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Sendero</td>
            <td>Renault</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Spider</td>
            <td>Lamborgini</td>
            <td>2019</td>
          </tr> */}
        </tbody>
      </table>
    </div>)
};

const FormularioCrearVehiculos =( {funcionParaLaTabla,listaVehiculos,funcionParaAgregarVehiculos})=>{
  const [nombre, setNombre]=useState();
  const [marca, setMarca]=useState();
  const [modelo, setModelo]=useState();

  const enviarAlBackend = ()=> {
    console.log('nombre:', nombre, 'marca:', marca, 'modelo', modelo);
    toast.success('Vehiculo creado con exito');
    funcionParaLaTabla(true);
    funcionParaAgregarVehiculos([...listaVehiculos,{nombre:nombre,marca:marca,modelo:modelo}]);
  };




 return (
 <div className="flex flex-col justify-center items-center">
   <h2 className="text-2xl font-normal text-violet-600">Crear Nuevo Vehículo</h2>

   <form className="flex flex-col">
     <label htmlFor="nombre" className="flex flex-col">
       Nombre del vehículo
       <input 
        name='nombre' 
        className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" 
        type='text' 
        placeholder='Corolla'
        value={nombre}
        onChange={(e)=>{ setNombre(e.target.value); }} />
     </label>

     <label htmlFor="marca" className="flex flex-col">
       Marca del vehículo
       <select  
       value={marca}
       onChange={(e)=>{ setMarca(e.target.value); }}
       className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
       name='marca' >
         <option disabled>Seleccione una opción</option>
         <option>Toyota</option>
         <option>Ford</option>
         <option>Renault</option>
         <option>Wolkswagen</option>
         <option>Fiat</option>
         <option>Chevrolet</option>
       </select>
     </label>

     <label htmlFor="modelo" className="flex flex-col">
       Modelo del vehículo
       <input name='modelo'
        className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" 
        type='number' 
        min={2000} 
        max={2022} 
        placeholder='2000'
        value={modelo}
        onChange={(e)=>{ setModelo(e.target.value); }} />
     </label>

     
    
    <button 
      type='button' 
      className="col-span-2 bg-green-500 p-2 m-2 rounded-full drop-shadow-md hover:bg-green-400"
      onClick={()=>{enviarAlBackend ()}}
      >
        Guardar Vehículo
    </button>
   </form>
   
 </div>
 );
};



export default Vehiculos;