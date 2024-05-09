import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './elementos/Header'
import Boton from './elementos/Boton';


function App() {
  return (

    <>
    <Helmet>
     <title> Aplicacion Gastos</title>
    </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/gastos">Categorias</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  )
}

export default App;
