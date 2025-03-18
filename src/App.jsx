import { useState } from "react";

import "./App.css";

//! Milestone 1: Mostrare la lista dei prodotti
/* 1. Parti dall’array products fornito:

const products = [

  { name: 'Mela', price: 0.5 },

  { name: 'Pane', price: 1.2 },

  { name: 'Latte', price: 1.0 },

  { name: 'Pasta', price: 0.7 },

];

    Crea un componente che mostra la lista dei prodotti.
    Per ogni prodotto, mostra:
        Nome
        Prezzo

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo. */
function App() {
  const products = [
    { name: "Mela", price: 0.5 },

    { name: "Pane", price: 1.2 },

    { name: "Latte", price: 1.0 },

    { name: "Pasta", price: 0.7 },
  ];
  return (
    <>
      <h1>Lista dei prodotti</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>
              {product.name} {""}
              {product.price.toFixed(2)}€
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
