import React, {useState,useEffect, useRef} from 'react';
import {obtenerUsuarios, obtenerVehiculos, crearVenta} from 'utils/api.js';
import { nanoid } from 'nanoid'

import PrivateLayout from 'layouts/PrivateLayout';

const Ventas = () => {
  // Todos los vendedores se traeran a partir de un estado

  const [vendedores, setVendedores]=useState([]);
  const [vehiculos, setVehiculos]=useState([]);
  const [vehiculosTabla, setVehiculosTabla]=useState([]);
  const form= useRef(null);


  useEffect(()=>{
    const fetchVendedores = async ()=>{
      // llamamos a la funcion fetchVendedores creada en el api para que busque los venderores
      obtenerUsuarios(
        (response)=>{
          setVendedores(response.data);
        },
        (error)=>{
          console.error(error)});
    };

    //obtenemos los vehiculosFiltrados
    const fetchVehiculos= async ()=>{
      await obtenerVehiculos(
        (response)=>{
          setVehiculos(response.data);
        },
        (error)=>{
          console.error(error)});
    };

    fetchVehiculos();
    fetchVendedores();
  },[]);

 


  // Funcion para agregar nuevo vehiculo con dropdown, osea a la lista de vehiculos le agrega lo que se seleeciona en el dropdown
  // const agregarNuevoVehiculo= ()=>{
  //   setVehiculosSeleccionados([...vehiculosSeleccionados]);
  // }

  // funcion para que el boton envie la informacion
  const submitForm=async (e)=>{
    e.preventDefault();
    const fd= new FormData(form.current);
    const formData ={};
    fd.forEach((value,key)=>{
      formData[key]=value;
    });

    console.log('form data', formData);

    const listaVehiculos= Object.keys(formData).map((k)=>{
      if(k.includes('vehiculo')){
        return vehiculosTabla.filter((v)=>v._id ===formData[k])[0];
      }
      return null;
    }).filter((v)=>v);

    console.log("lista antes de cantidad", listaVehiculos);



    Object.keys(formData)
    .forEach((k)=>{
      if(k.includes('cantidad')){
        const indice =parseInt(k.split('_')[1]);
        listaVehiculos[indice]["cantidad"]=formData[k];
     }
    });

    console.log("lista despues de cantidad", listaVehiculos);



    // console.log("lista vehiculos", listaVehiculos);
    // En el formData queda el id del veichulo y del vendedro, ademas del precio

    //Mandamos la informacion al backend

    const datosVenta={
      vendedor: vendedores.filter((v)=> v._id===formData.vendedor)[0],
      cantidad: formData.valor,
      vehiculo: listaVehiculos,
    };

    await crearVenta(
      datosVenta,
      (response)=>{
        console.log(response)
      },
    (error)=>{
      console.error(error);
    })

  
  };



  return (
    <PrivateLayout>
      {/* Creamos un formulario para la creacion de una venta, debe tener tres datos suministrados por el usuarios
      el vendedor, el vehiculo y valor de la venta */}

      <div className="flex h-full w-full  items-center justify-center">

        <form ref={form} onSubmit={submitForm} className="flex flex-col ">
          {/* Titulo de la pagina */}
          <h1 className="text-3xl font-semibold text-violet-600">Crear Nueva Venta</h1>
          {/* Label de los usuarios */}
          <label className="flex flex-col " htmlFor="vendedor">
            <span className="text-2xl font-gray-500">Vendedor</span>
            <select name="vendedor" className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" defaultValue="" required>
              <option disabled value="">Seleccione un vendedor:</option>
              {vendedores.map((el)=>{
                  // concatenamos el nombr y apellido con los elementos que devuelve el map
                  // Cuando seleccionesmo de la lista desplegadam indicaremos el id de ese elemento como valor de la etiqueta option
                return <option key={nanoid()}value={el._id}>{`${el.name} ${el.lastname}`}</option>
              })};
            </select>

          </label>
          {/* Label de los vehiculos, es reeemplazado por una tabla  */}

          <TablaVehiculos vehiculos={vehiculos}  setVehiculos={setVehiculos} setVehiculosTabla={setVehiculosTabla}/>

         

     
          
          <label className="flex flex-col " htmlFor="valor">
            <span className="text-2xl font-gray-500">Valor total de Venta</span>
            <input 
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" 
              type="number"
              name="valor"></input>
          </label>


          {/* Boton para crear venta de tipo submit */}
          <button
          type='submit'
          className="col-span-2 bg-green-500 p-2 m-2 rounded-full drop-shadow-md hover:bg-green-400">
            Crear Venta
          </button>
        
        </form>
      </div>  
    </PrivateLayout>
  );
};
 const TablaVehiculos=({vehiculos, setVehiculos, setVehiculosTabla})=>{
   const [vehiculoAAgregar, setVehiculoAAgregar]=useState({});
  //  Estado que controla cuantas filas hay en un estado
  const [filasTabla, setFilasTabla]=useState([]);

   useEffect (()=>{
     console.log(vehiculoAAgregar);
   },[vehiculoAAgregar]);

   useEffect (()=>{
     console.log('filasTabla',filasTabla);
     setVehiculosTabla(filasTabla);
   }, [filasTabla, setVehiculosTabla]);

   const agregarNuevoVehiculo= ()=>{
     setFilasTabla([...filasTabla, vehiculoAAgregar]);
    //  funcion para agregar un vehiculo al dropdown cuando se lo elimina de la tabla
     setVehiculos(vehiculos.filter((v)=>v._id!==vehiculoAAgregar._id));
     setVehiculoAAgregar({});
   };
 
   const eliminarVehiculo =(vehiculoAEliminar)=>{
     setFilasTabla(filasTabla.filter(v=>v._id!==vehiculoAEliminar._id));
    //  Funcion para eleiminar vehiculo del dropdown cuando se lo agrega ala tabla
     setVehiculos([...vehiculos, vehiculoAEliminar]);

   }



   return (
     <div>
      <div className="flex ">
        <label className="flex flex-col " htmlFor="vehiculo">
            <select  
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" 
              // los dos signos de preguntas ?? sirven como condicion, que pasa si el id no existe al cargar la pagina
              // por lo tanto debemos poner comillas vacias al igual que el <option>
              value={vehiculoAAgregar._id ?? ''}
              onChange={(e)=>{setVehiculoAAgregar(vehiculos.filter((v)=>v._id===e.target.value)[0])}}
              >
                <option disabled value=''>Seleccione un vehiculo:</option>
                  {vehiculos.map((el)=>{
                  // concatenamos el nombr y apellido con los elementos que devuelve el map
                  // Cuando seleccionesmo de la lista desplegadam indicaremos el id de ese elemento como valor de la etiqueta option
                  return (
                  <option 
                    key={nanoid()}
                    value={el._id}
                    >{`${el.name} ${el.brand} ${el.model}`}</option>)
                  })};
            </select>
        </label>
        <button 
          onClick={()=>{agregarNuevoVehiculo()}}
          className="col-span-2 bg-green-500 p-2 m-2 rounded-full drop-shadow-md hover:bg-green-400">
          Agregar Vehiculo
        </button>
      </div>
       {/* Creamos la tabla con la informacion del vehiculo */}
       <table className="tabla">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
              <th className="hidden">Input</th>
            </tr>
          </thead>
          <tbody>
            {filasTabla.map((el, index)=>{
              return(
                <tr>
                  <td>{el._id}</td>
                  <td>{el.name}</td>
                  <td>{el.brand}</td>
                  <td>{el.model}</td>
                  <td>
                    <label htmlFor={`valor_${index}`}>
                      <input className="text-black" type='number' name={`cantidad_${index}`} required/>
                    </label>
                  </td>
                  <td>
                    {/* En el onClcik necesitamos una funcion que elimine la fila del estado */}
                    <i onClick={()=>eliminarVehiculo(el)}className='fas fa-minus text-red-500 cursor-ponter'/>
                  </td>
                  {/* Se coloca este input para que capture las filas con los datos de los vehiculos agregados de la tabla */}
                  <input hidden defaultValue={el._id} name={`vehiculo ${index}`}/>
                </tr>
              );
            })}

          </tbody>
          
        </table>
     </div> 
  
   );
 };


  

export default Ventas;

// 36:14