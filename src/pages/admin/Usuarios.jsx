import React, {useState, useEffect} from 'react';
import {obtenerUsuarios,editarUsuario} from 'utils/api';
import PrivateLayout from 'layouts/PrivateLayout';
import { nanoid } from 'nanoid';
import PrivateComponent from 'components/PrivateComponent';



const Usuarios = () => {

    const [usuarios, setUsuarios]=useState([]);
    // Pedimos los Usuarios
    useEffect (()=>{
        const fetchUsuarios= async()=>{
            await obtenerUsuarios(
                (respuesta)=>{
                    console.log("usuarios", respuesta.data);
                    setUsuarios(respuesta.data);
                },
                (err)=>{console.log(err);
                }
              );
        }
        fetchUsuarios();
    },[]);
    


  return (
        <PrivateLayout>
               <div className="flex flex-col justify-center items-center">

                <div className="text-black">Admin usuarios</div>
                <PrivateComponent roleList={['admin']}> 
                    <button className="bg-violet-500 text-black"> Hola </button>
                </PrivateComponent>
                <table className="tabla">
                    <tbody>
                        {usuarios.map((user)=>{
                            return (
                                <tr key={nanoid()}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <RolesUsuario user={user}/>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>

           

        </PrivateLayout>
  );
};

const  RolesUsuario = ({user})=>{
    //para que coloque el rol del usuario que viene de la BD
    const [rol, setRol]=useState(user.rol);
    //editar el rol del usuario
    useEffect(()=>{
        const editUsuario= async ()=>{
            await editarUsuario(user._id, {rol}, 
                (res)=>{
                    console.log(res);
                },
                (err)=>{
                    console.error(err);
                }
               );
        };
        if(user.rol !==rol){
            editUsuario();
        };
    },[rol, user]);

    return (
        <select 
        className='text-black'
        value={rol}
        onChange={(e)=>{setRol(e.target.value)}}>
            <option value='admin'>Admin</option>
            <option value='vendedor'>Vendedor</option>
            <option value='inactivo'>Inactivo</option>
        </select>
    );
};




export default Usuarios;