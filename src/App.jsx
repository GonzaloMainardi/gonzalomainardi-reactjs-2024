import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="BIENVENIDX A HI FIVE! LA TECNOLOGIA AL ALCANCE DE TU MANO." />
    </>
  );
}

export default App;