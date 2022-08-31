import { useState } from "react"

export default function Item({name, description, stock, contadorCompra}) {

const [currentStock, setCurrentStock] = useState(stock)
const actualizarCompra = ()=>{
  setCurrentStock(currentStock-1)
  contadorCompra()
}


    return (
      <div className='producto'>
        <h3>{name}</h3>
        <p>{description}</p>
        <h5>En stock: {currentStock>0 ? currentStock : <span>Agotado</span>}</h5>
        {currentStock>0 ? <button onClick={() => actualizarCompra()}>Comprar</button> : <button disabled>Sin stock</button>}
      </div>
    )
  }
