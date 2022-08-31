import React from 'react'

export default function Cabecera({compra}) {
  
  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <span>{compra}</span></p>
    </header>
  )
}