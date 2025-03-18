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

//! Milestone 2: Aggiungere prodotti al carrello

/* Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
    Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
        Al click del bottone, usa una funzione addToCart per:
            Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
        Se il prodotto è già nel carrello, ignora l’azione.
    Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
        Per ogni prodotto nel carrello, mostra:
            Nome
            Prezzo
            Quantità

Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti. */

//! Milestone 3: Modificare il carrello

/* Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
        Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
    Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
        Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
    Sotto alla lista del carrello, mostra il totale da pagare:
        Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.

Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico. */

function App() {
  const products = [
    { name: "Mela", price: 0.5 },

    { name: "Pane", price: 1.2 },

    { name: "Latte", price: 1.0 },

    { name: "Pasta", price: 0.7 },
  ];
  const [addedProducts, setAddedProducts] = useState([]);

  /* Funzione per aggiungere un prodotto al carrello */
  function addToCart(product) {
    const productCard = addedProducts.find((p) => p.name === product.name);
    if (productCard) {
      updateProductQuantity(product);
      return productCard;
    } else {
      setAddedProducts([
        ...addedProducts,
        (product = { ...product, quantity: 1 }),
      ]);
    }
    return productCard;
  }

  /* Funzione per rimuovere un prodotto dal carrello */
  function removeFromCart(product) {
    setAddedProducts(
      (prevProducts) =>
        prevProducts
          .map((p) =>
            p.name === product.name ? { ...p, quantity: p.quantity - 1 } : p
          )
          .filter((p) => p.quantity > 0) // Rimuove i prodotti con quantità 0
    );
  }

  /* Funzione per aggiungere più prodotti dello stesso tipo al carrello */
  function updateProductQuantity(product) {
    setAddedProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  /* Funzione per calcolare il totale */
  function getTotal() {
    return addedProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }

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
            <button onClick={() => addToCart(product)}>
              Aggiungi al carrello
            </button>
            <button onClick={() => removeFromCart(product)}>
              Rimuovi dal carrello
            </button>
          </li>
        ))}
      </ul>
      <h2>Prodotti nel carrello</h2>
      <ul>
        {addedProducts.map((product, index) => (
          <li key={index}>
            {product.name} {product.price.toFixed(2)}
            {"€"}
            {"" + "-" + ""}
            {`Quantità: ${product.quantity}`}
          </li>
        ))}
      </ul>
      <div>
        <h3>Totale da pagare: {getTotal().toFixed(2)}€</h3>
      </div>
    </>
  );
}

export default App;
