import {createContext, useContext} from 'react';

export const darkModeContext=createContext(null);

export const useDarkMode =()=>{
    return useContext(darkModeContext);
};