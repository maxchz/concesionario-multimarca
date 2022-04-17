import React, {useEffect, useState} from 'react';
import PrivateLayout from 'layouts/PrivateLayout';

const Vehiculos = () => {

  // useEffect(() =>{
  //   console.log("hola soy un useEffect se ejecuta 1 vez cuando la pagina se renderiza, con array vacio");
  //   // ejecucion 2
  //   // ejecucion 3
  //   // ejecucion 4
  // }, [])

  const [nombreVehiculo,setNombreVehiculo]=useState('');

  const enviarDatosAlBackend = () => {
    console.log("El valor de la variable nombreVehiculo es:", nombreVehiculo)
  }

  useEffect ( ()=>{
    console.log("Esto es una funcion que se ejecuta cada vez que cambia el valor de nombreVehiculo")
    console.log("el valor de la variable es:", nombreVehiculo)
  },[nombreVehiculo])



  return (
    <PrivateLayout>
      <div>
        <form className="flex flex-col">
          <h2 className="text-violet-600 font-medium">Formulario para Creación de Vehículos</h2>
          <input onChange={(e) =>{setNombreVehiculo (e.target.value)}} type="text" placeholder="Nombre del vehiculo" />
          <input onChange={(e) =>{console.log (e.target.value)}} type="text" placeholder="Marca del vehiculo" />
          <input type="text" placeholder="Modelo del vehiculo"/>
          <button onClick={enviarDatosAlBackend} type="button" className="bg-violet-600 hover:bg-violet-400 text-white rounded-lg ">Enviar Datos</button>

        </form>

      </div>

    </PrivateLayout>
  );
};

export default Vehiculos;