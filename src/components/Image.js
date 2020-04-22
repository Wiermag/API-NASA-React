import React, { useContext, useState } from "react";
import { NasaContext } from './GetAPI';

const Images = () => {
    const [arrayImg] = useContext(NasaContext);
    const [visible, setVisible] = useState(6);
    
    const showMore = () =>  {
        setVisible(visible + 6);
    }
    

    const images =  arrayImg.map(item =>  {
            return (
                    <li key={item.id}>
                        <img  alt={item.id} src={item.img_src}/>
                        <div></div>
                    </li>
                );
    });
                
   
    return (
            <div>{visible < arrayImg.length ?
                <section className="gallery-section slideLeft">
                    <h2>Gallery</h2>
                    <div className="grid-container">
                    {images.slice(0,visible)}
                    </div>
                    <span><button className="btn" onClick={showMore}>LOAD MORE</button></span>

                </section> : null}
            </div>
    )
}

export { 
    Images
}



