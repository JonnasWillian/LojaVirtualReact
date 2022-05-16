import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Contato from "./paginas/Contato/contato";
import Main from "./paginas/inicial/main";
import Produtos from './paginas/produtos/produtos';

function Rooutes(){

    return(
        <BrowserRouter>
            <Routes> 
                    <Route path="/" element={<Main/>} />
                    <Route path="/Contato" element={ <Contato/> }/>
                    <Route path="/Produtos" element={ <Produtos/> }/>
            </Routes>
        </BrowserRouter>
    )

}

export default Rooutes; 