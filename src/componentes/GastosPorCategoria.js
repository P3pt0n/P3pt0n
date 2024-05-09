import React from 'react';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/Header'
import { Helmet } from 'react-helmet';
import Boton from '../elementos/Boton';
import BtnRegresar from '../elementos/BtnRegresar';

const GastosPorCategoria = () => {

    return (
        
        <>
        <Helmet>
         <title> Gastos por Categoria</title>
        </Helmet>
    
          <Header>
          <BtnRegresar></BtnRegresar>
            <ContenedorHeader>
              <Titulo>Gastos por Categoria</Titulo>
            </ContenedorHeader>
            
          </Header>
        </>

    );
}

export default GastosPorCategoria;
