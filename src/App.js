import React from 'react';
import './App.scss';

import { Header } from "./components/Header";
import { Images } from "./components/Image";
import { GetAPI } from "./components/GetAPI"

const App = () => {
    
    return (
        <GetAPI>
           <Header/>
           <Images/>
        </GetAPI>
    ); 
}
export {
    App
}
