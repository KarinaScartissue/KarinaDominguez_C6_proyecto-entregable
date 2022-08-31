import React from 'react'
import Item from './items'

export default function Listado({data, contadorCompra}) {
  return (
    <div className='container'>
        {
          data.map((elemento)=> <Item key={elemento.id} name={elemento.producto.nombre} description={elemento.producto.descripcion} stock={elemento.stock} contadorCompra={contadorCompra} />)
        }
    </div>
  )
}