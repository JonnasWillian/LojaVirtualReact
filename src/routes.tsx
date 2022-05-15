import React from "react";
import {BrowserRouter, Route } from 'react-router-dom'
//import App from "./App";
import Contato from "./paginas/Contato/contato";
import Main from "./paginas/inicial/main";

function Routes(){
    return(
        <BrowserRouter>
            <switch>
                    <Route path="/" element={<Main/>} />
                    <Route path="/Contato" element={ <Contato/> }/>
            </switch>
        </BrowserRouter>
    )
}

export default Routes; 