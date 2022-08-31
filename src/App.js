import React, {useState} from 'react'
import './App.css';
import Cabecera from './components/cabecera';
import productos from './components/data.json';
import Listado from './components/listado';


function App() {

  let [compra, setCompra] = useState(0);
  const contadorCompra= () => {
    setCompra(++compra);
  }

  return (
    <div className="App">
      <Cabecera compra={compra} />
      <Listado data={productos} contadorCompra={contadorCompra} /> 
    </div>
  );
}

export default App;