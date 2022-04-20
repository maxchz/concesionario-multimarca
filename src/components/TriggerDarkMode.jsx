import React from 'react';
import {useDarkMode} from 'context/darkMode';


const TriggerDarkMode = () => {

    
    const { darkMode, setDarkMode }= useDarkMode ();
    return (
        <button onClick={()=>{setDarkMode(!darkMode)}}
        className="text-black col-span-2 bg-gray-300 p-2 m-2 rounded-full drop-shadow-md mx-auto"
        > {darkMode ? "Desactivar":"Activar"} modo Dark</button>
    );
};

export default TriggerDarkMode;
