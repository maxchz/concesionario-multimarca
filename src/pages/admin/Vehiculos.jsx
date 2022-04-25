import React, {useEffect, useState, useRef} from 'react';
import { nanoid } from 'nanoid'
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


  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl font-normal text-violet-600 w-full">Todos los Vehiculos</h2>
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

            {listaVehiculos.map((vehiculo)=>{
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
          (<i onClick={()=>{actualizarVehiculo()}}  className="fa-solid fa-check text-green-400 hover:text-green-700"></i>)
          :
          (<i onClick={()=>{setEdit(!edit)}} className="fa-solid fa-pencil text-gray-400 hover:text-green-400"></i>)}
          <i onClick ={()=>{eliminarVehiculo()}} className="fa-solid fa-trash-can text-gray-400 hover:text-red-500"></i>
          
        </div>
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