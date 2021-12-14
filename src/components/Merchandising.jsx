import React from 'react';
import { merchandising, link, article, articlesContainer } from '../assets/styles/Merchandising.module.css'

const Merchandising = () => {
  return (
    <section className={merchandising}>
      <h2>Merchandising</h2>
      <div className={articlesContainer}>
        <article className={article}>
          <img src="images/Merchandising/coin.webp" alt="moneda" />
          <h4>Moneda Real</h4>
        </article>
        <article className={article}>
          <img src="images/Merchandising/shirt.png" alt="remera" />
          <h4>Remera estampada</h4>
        </article>
        <article className={article}>
          <img src="images/Merchandising/pin.jpg" alt="pin" />
          <h4>Pin</h4>
        </article>
      </div>
      <a href="##" className={link}>COMPRAR</a>
    </section>
  );
}
 
export default Merchandising;