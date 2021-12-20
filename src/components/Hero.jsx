import React from 'react'
import ProgressBar from './svg/ProgressBar'
import BackgroundHero from './svg/BackgroundHero'
import Styles from '../assets/styles/Hero.module.css'

const Hero = () => {
  const SATOSHI = 0.1259  // valor de 1 Satoshi en pesos argentinos.
  return (
    <section className={Styles.container_hero}>
      <BackgroundHero className={Styles.background}/>
      <img src="images/satoshiCoin.png" alt="Moneda 1 satoshi 1 peso" className={Styles.satoshiCoin}/>
      <div className={Styles.satoshi}>
        <h1>1 Satoshi =</h1>
        <div>
          {SATOSHI.toString().split('').map((element, idx)=> <span key={idx}>{element === '.' ? ',' : element}</span>)}
          <span>ARS</span>
        </div>
      </div>
      <div className={Styles.satoshi_info}>
        <span>Un satoshi es la unidad mínima de medida que se puede utilizar en el sistema Bitcoin.</span>
        <span>Es la fracción más pequeña en la que puedes dividir un bitcoin.</span>
      </div>
      <img src="images/hang.svg" alt="Manoapuntando hacia abajo." className={Styles.bounce} />
      <ProgressBar className={Styles.progressBar} satoshi={SATOSHI} />
    </section>
  )
}
 
export default Hero;