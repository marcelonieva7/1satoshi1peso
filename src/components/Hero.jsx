import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import ProgressSvg from './ProgressSvg'
import Styles from '../assets/styles/Hero.module.css'

const Hero = () => {
  const { width } = useWindowDimensions()
  const SATO = 0.1259  // valor de 1 Satoshi en pesos argentinos.

  let ratio = 0.0001  // calcula el porcentaje de progreso para llegar a la meta de 1Satoshi = 1 peso.
  if (SATO) {
    SATO > 1 ? ratio = 1 : ratio = SATO
  }
  const style = width > 1369 ? {left: `calc(((100vw - 1369px) /2) + ${15+(1135*ratio)}px)`} : width < 768 ? {left: `calc((-45px + 6%) + ${90*ratio}% - ${100*ratio}px)`} : {left: `calc((-61px + 5.5% ) + ${92*ratio}% - ${120*ratio}px)`};
  return (
    <section className={Styles.container_hero}>
      <div className={Styles.main} style={{backgroundImage: "url('images/svg.svg')"}} >
        <img src="images/satoshiCoin.png" alt="Moneda 1 satoshi 1 peso" className={Styles.satoshiCoin}/>
        <div className={Styles.satoshi}>
          <h1>1 Satoshi =</h1>
          <div>
            {SATO.toString().split('').map((element, idx)=> <span key={idx}>{element === '.' ? ',' : element}</span>)}
            <span>ARS</span>
          </div>
        </div>
        <div className={Styles.satoshi_info}>
          <span>Un satoshi es la unidad mínima de medida que se puede utilizar en el sistema Bitcoin.</span>
          <span>Es la fracción más pequeña en la que puedes dividir un bitcoin.</span>
        </div>
        <img src="images/caballo.svg" alt="Progreso de satoshi." className={Styles.progress_Horse} style={style} />
        <img src="images/hang.svg" alt="Manoapuntando hacia abajo." className={Styles.bounce} />
        <ProgressSvg className={Styles.progress_Img} ratio={ratio} />
      </div>
    </section>
  )
}
 
export default Hero;