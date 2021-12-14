import React from 'react';
import Styles from '../assets/styles/Hero2.module.css'

const Hero2 = () => {
  return (
    <section>
      <div className={Styles.container}>
        <span>Después de ver este gráfico</span>
        <h2>¿Seguís pensando en ahorrar en papel?</h2>
        <span>Un Satoshi Un Peso es inevitable</span>
      </div>
      <div className={Styles.parallax} />
    </section>
  );
}
 
export default Hero2;