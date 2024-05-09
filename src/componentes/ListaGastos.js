import React from 'react';
import BtnRegresar from '../elementos/BtnRegresar';
import { ContenedorHeader, Header, Titulo } from '../elementos/Header';
import { Helmet } from 'react-helmet';


const ListaGastos = () => {

    return (
        <>
        <Helmet>
         <title> Lista de Gastos</title>
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

export default ListaGastos;
