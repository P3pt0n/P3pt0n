import styled from "styled-components";

const Contenedor = styled.div`
    background: #fff;
    width: 90%;
    max-width: 70rem; /*1110px*/ /*rem es una unidad relativa, no absoluta como el pixel y utiliza el valor de font size del elemento root (<html>) para mantener un diseño responsivo de la pagina*/
    height: 90vh; /*Viewport Height es el 90% de alto de la parte visible del navegador*/
    max-height: 50rem;  /* 800px */
    overflow-y: auto; /* para que tengamos un scroll*/
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0.625rem; /* 10px */
    margin: auto;
    display: flex; 
    flex-direction: column; /* todos los elementos se trabajan con una columna*/
    justify-content: space-between; /* espacio entre las columnas */
    position: relative;
    z-index: 100;
 
    @media(max-width: 60rem){ /* 950px */
        height: 95vh;
        max-height: none;
    }
`;

export default Contenedor;
