import React, {useEffect, useState, useRef} from 'react';
import { nanoid } from 'nanoid'
import PrivateLayout from 'layouts/PrivateLayout';
import { ToastContainer, toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';


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
  // const [ejecutarConsulta, setEjecutarConsulta]= useState(true);

  // useEffect(()=>{
  //   if (ejecutarConsulta){
  // funcion que usa api para actualizar cada vez que edito o borro
  //   }

  // },[ejecutarConsulta])


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
           setMostrarTabla={setMostrarTabla} 
           listaVehiculos={vehiculos}
           setVehiculos={setVehiculos}/>)}




        <ToastContainer position="bottom-center" autoClose={5000}/>

      </div>

    </PrivateLayout>
  );
};

const TablaVehiculos =({listaVehiculos})=>{
  // useEffect (() => {
  //   console.log("Este es el listado de vehiculos en el componente de table", listaVehiculos)
  // }, [listaVehiculos]);
  const [busqueda,setBusqueda]=useState('');
  const [vehiculosFiltrados, setVehiculosFiltrados]=useState(listaVehiculos);

  useEffect (()=>{
    
    setVehiculosFiltrados(
    listaVehiculos.filter(elemento=>{
      // Con este comando la busqueda se realiza en toda la tabla, convierte un objeto a estring, lo pasa a minuscula
      // y preguntando si inlcuye o es igual  a lo que esta dentro de busqueda
      return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase())
    })
    ); 
  },[busqueda, listaVehiculos])


  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <input 
       value={busqueda}
       onChange={(e)=>{setBusqueda(e.target.value)}}
       className="border border-gray-400 px-3 py-1 rounded-md self-start focus:outline-none focus:border-violet-700"
       placeholder="buscar"
       />

      <h2 className="text-2xl font-normal text-violet-600 w-full">Todos los Vehiculos</h2>


      <div className="hidden md:flex w-full">
        <table className=" tabla text-center">
            <thead>
              <tr>
                <th>Nombre del vehiculo</th>
                <th>Marca del vehiculo</th>
                <th>Modelo del vehiculo</th>
                <th>Editar</th>

              </tr>
            </thead>
            <tbody>

              {vehiculosFiltrados.map((vehiculo)=>{
                return (
                <FilaVehiculo key={nanoid()} vehiculo={vehiculo}/>
                                
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
      </div>
      {/* Para hacer responsive una tabla debemos usar cards */}
      <div className="flex flex-col w-full m-2 md:hidden">
        {vehiculosFiltrados.map((el)=>{
          return(
            <div className="bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl">
              <span>{el.nombre}</span>
              <span>{el.marca}</span>
              <span>{el.modelo}</span>
            </div>
          );
        })}
        
      </div>

        
    </div>);
};

const FilaVehiculo=({vehiculo})=>{
  const [edit, setEdit]=useState(false);
  const [infoNuevoVehiculo, setInfoNuevoVehiculo]=useState({
    nombre:vehiculo.nombre, 
    marca:vehiculo.marca,
    modelo:vehiculo.modelo,
  });
  const actualizarVehiculo=()=>{
    console.log(infoNuevoVehiculo);
    //enviar la informacion la backend
  }

  const eliminarVehiculo =()=>{
    //agregar delete del api para borrar en la BD
  }

  const [openDialog, setOpenDialog]=useState(false);

  return(
    <tr>
        {edit?(
         <> 
          <td><input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 text-black" type="text" value={infoNuevoVehiculo.nombre} onChange={(e)=>{setInfoNuevoVehiculo({...infoNuevoVehiculo,nombre:e.target.value})}}/></td>
          <td><input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 text-black" type="text" value={infoNuevoVehiculo.marca} onChange={(e)=>{setInfoNuevoVehiculo({...infoNuevoVehiculo,marca:e.target.value})}}/></td>
          <td><input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 text-black" type="text" value={infoNuevoVehiculo.modelo} onChange={(e)=>{setInfoNuevoVehiculo({...infoNuevoVehiculo,modelo:e.target.value})}}/></td>
         </> 
        ):(
        <>
          <td>{vehiculo.nombre}</td>
          <td>{vehiculo.marca}</td>
          <td>{vehiculo.modelo}</td>
        </>)
      }

      <td>  
        <div className="flex w-full justify-around">
          {edit ? 
          (
          <>      
            <Tooltip title="Confirmar edición" arrow>
              <i onClick={()=>{actualizarVehiculo()}}  className="fa-solid fa-check text-green-400 hover:text-green-700"></i>
            </Tooltip>
            <Tooltip title="Cancelar edición" arrow  placement='bottom'>
              <i onClick={()=>{setEdit(!edit)}} className="fa-solid fa-ban text-gray-400 hover:text-green-400"></i>
            </Tooltip>
          </>  
            ):(
          <>    
            <Tooltip title="Editar vehiculo" arrow  placement='bottom'>
              <i onClick={()=>{setEdit(!edit)}} className="fa-solid fa-pencil text-gray-400 hover:text-green-400"></i>
            </Tooltip>
            <Tooltip title="Eliminar vehiculo" arrow>
            <i onClick ={()=>{setOpenDialog(true)}} className="fa-solid fa-trash-can text-gray-400 hover:text-red-500"></i>
            </Tooltip>
          </>     
          )}  
        </div>

        {/* Elemento de material UI para mostrar un dialogo emergente frontal para confirmar o no una accion */}
        <Dialog open={openDialog}>
          <div className="flex flex-col p-8 justify-center items-center">
            <h1 className="text-violet-700 text-2xl font-bold">¿Estás seguro que eliminar el vehiculo?</h1>
            <div className="flex items-center justify-center w-full my-4">
              <button onClick={()=>{eliminarVehiculo()}} className="mx-2 px-4 py-2 bg-green-400 text-black rounded-md hover:bg-green-600 shadow-md">SI</button>
              <button onClick={()=>{setOpenDialog(false)}} className="mx-2 px-4 py-2 bg-red-400 text-black rounded-md hover:bg-red-600 shadow-md">NO</button>
            </div>
          </div>
        </Dialog>

        





      </td>  
    </tr>

  );
};


const FormularioCrearVehiculos =( {setMostrarTabla,listaVehiculos,setVehiculos})=>{
  const form=useRef(null);
 

  const submitForm=(e)=>{
    e.preventDefault();
    const fd=new FormData(form.current);

    const nuevoVehiculo ={};
    fd.forEach((value, key)=>{
      nuevoVehiculo[key]=value;
    });


    setMostrarTabla(true)
    toast.success("Vehiculo agregado con exito!!")
    setVehiculos([...listaVehiculos, nuevoVehiculo])

  }





 return (
 <div className="flex flex-col justify-center items-center">
   <h2 className="text-2xl font-normal text-violet-600">Crear Nuevo Vehículo</h2>

    <form ref={form} onSubmit={submitForm} className="flex flex-col">
     <label htmlFor="nombre" className="flex flex-col">
       Nombre del vehículo
       <input 
        name='nombre' 
        className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" 
        type='text' 
        placeholder='Corolla'
        
        required
       />
        
     </label>

     <label htmlFor="marca" className="flex flex-col">
       Marca del vehículo
        <select  
          
          className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
          name='marca' 
          required
          defaultValue={0}
          >
            <option disabled value={0}>Seleccione una opción</option>
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
        required
        />
     </label>

     
    
      <button 
        type='submit'
        className="col-span-2 bg-green-500 p-2 m-2 rounded-full drop-shadow-md hover:bg-green-400"

        >
          Guardar Vehículo
      </button>
    </form>
   
 </div>
 );
};



export default Vehiculos;