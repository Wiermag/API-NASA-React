import React,{ useEffect, useState, createContext } from "react";

const NasaContext = createContext();

const GetAPI = (props) => {
    
    const [dataNasa, setDataNasa] = useState([]);
  
        useEffect(() => {
            getNasaAPI();
        },[]); 
        
      
        const API_KEY = 'JPetPlsS4kTmHUS9WXPylAejlaraORAj5fckLEtQ';
        const getNasaAPI = async () => {
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
            const data = await response.json();
            setDataNasa(data.photos);
           
        }
        return (
            <NasaContext.Provider value={[dataNasa,setDataNasa]}>
                {props.children}
            </NasaContext.Provider>
        );
}

export {
    GetAPI, NasaContext
}