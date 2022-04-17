import React, {useEffect, useState} from 'react';
import PrivateLayout from 'layouts/PrivateLayout';


// realizar un formulario que pida a usuario su edad y muestre si es mayor de edad o no

const Vehiculos = () => {

  const [edad,setEdad]=useState(0);
  const [esMenorDeEdad , setEsMenorDeEdad] = useState (false);
  const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState (false);

  useEffect(()=>{
    if (edad>=18){
      setEsMenorDeEdad(false);
    }else{
      setEsMenorDeEdad(true);
    }
  }

     ,[edad]);


  return (
    <PrivateLayout>
      <div>
        <form className="flex flex-col">
          <h2 className="text-violet-600 font-medium">Formulario para Creación de Vehículos</h2>
          <label htmlFor="edad">
            Por favor ingrese su edad:
            <input value={edad} onChange={(e)=>{setEdad(e.target.value)}}className="border border-gray-300 "name="edad" type='number' />

          </label>
          

        </form>
        {
          esMenorDeEdad? (<span className="text-3xl text-red-500">¡Usted es menor de edad, 
          no puede hacer pagos!</span>):(<span className="text-3xl text-green-500">¡Usted es mayor 
          de edad, si puede hacer pagos!</span>)
        }

        <button  onClick={()=>{setMostrarCamposAdicionales(!mostrarCamposAdicionales)}} type="button" className="bg-violet-600 hover:bg-violet-400 text-white rounded-lg ">Mostrar campos adicionales</button>

         {mostrarCamposAdicionales&&
         <div>
           <input className="border border-gray-400 my-2 p-3 " placeholder="dato nuevo" type='text'/>
           <input className="border border-gray-400 my-2 p-3 " placeholder="dato nuevo" type='text'/>
           <input className="border border-gray-400 my-2 p-3 " placeholder="dato nuevo" type='text'/>
           <input className="border border-gray-400 my-2 p-3 " placeholder="dato nuevo" type='text'/>
           <input className="border border-gray-400 my-2 p-3 " placeholder="dato nuevo" type='text'/>

         </div>

         } 



      </div>

    </PrivateLayout>
  );
};

export default Vehiculos;