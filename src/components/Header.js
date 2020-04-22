import React, {useContext, useEffect, useState} from "react";
import { NasaContext } from './GetAPI';

const Header = () => {   
    const [dataNasa] = useContext(NasaContext);  
    const background = dataNasa.map((item) => item.img_src)[Math.floor(Math.random() * (10 - 1)) +1];

    const [randomBackground, setRandomBackground] = useState(background);
    const style = {backgroundImage: `url(${background})`,
                   marginBottom: 20 +"px",
}
                  
    useEffect(() => {
        const interval = setInterval(() => { 
          setRandomBackground(randomBackground => randomBackground + [Math.floor(Math.random() * (10 - 1)) + 1] );
        }, 4000);
        return () => clearInterval(interval);
      }, []);
   
    return (
     <>
        <section className="welcome-section slideLeft" style={style} >
                <h1>NASA API Challenge</h1>  
                  <div className="loading">
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
                  <div className="loading-dot"></div>
            </div>,
        </section>
    </> 
    )
} 

export {
    Header 
}