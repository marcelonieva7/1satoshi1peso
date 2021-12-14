import React from 'react'
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import Swal from 'sweetalert2';
import Styles from '../assets/styles/Depreciation.module.css'

const Depreciation = () => {
  const handleClick1961 = () => {
    Swal.fire({
      title: '$10.000 1961',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }  
  const handleClick1970 = () => {
    Swal.fire({
      title: '$100 1970',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }
  const handleClick1981 = () => {
    Swal.fire({
      title: '$1.000.000 1981',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }
  const handleClick1983 = () => {
    Swal.fire({
      title: '$100 1983',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }
  const handleClick1985 = () => {
    Swal.fire({
      title: '$10.000 1985',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }
  const handleClick1985b = () => {
    Swal.fire({
      title: '$100 1985',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }
  const handleClick1990 = () => {
    Swal.fire({
      title: '$500.000 1990',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }  
  const handleClick1991 = () => {
    Swal.fire({
      title: '$100 1991',
      text: 'lorem',
      confirmButtonText: 'Cerrar',
      customClass: {
        container: Styles.top,
      }
    })
  }
  return (
    <section>
    <div className={Styles.depreciation_info}>
      <h2>Depreciación de la moneda en Argentina</h2>
      <p>El siguiente gráfico histórico muestra la depreciación de la moneda a lo largo de la historia argentina</p>
      <p>Basado en datos oficiales del Banco Central de la República Argentina.</p>
      <a target="_blank" rel="noreferrer" href="https://www.bcra.gob.ar/MediosPago/Emisiones_anteriores.asp">www.bcra.gob.ar/MediosPago/Emisiones_anteriores.asp</a>
    </div>
    <div>
      <section className={Styles.depreciation_bills}>
        <div className={Styles.bill1}>
          <span>$0,01</span>
        </div>
        <div className={Styles.bill2}>
          <span>Billete de</span>
          <span>$100</span>
        </div>
        <div className={Styles.bill3}>
          <span>Billete de</span>
          <span>$1.000</span>
        </div>
        <div className={Styles.bill4}>
          <span>Billete de</span>
          <span>$10.000</span>
        </div>
        <div className={Styles.bill5}>
          <span>Billete de</span>
          <span>$100.000</span>
        </div>
        <div className={Styles.bill6}>
          <span>Billete de</span>
          <span>$500.000</span>
        </div>
        <div className={Styles.bill7}>
          <span>Billete de</span>
          <span>$1.000.000</span>
        </div>
      </section>
      <section className={Styles.stickySpace}>
        <div className={Styles.box}></div>
        <div className={Styles.box}></div>
        <div className={Styles.box}></div>
        <div className={Styles.box}></div>
        <div className={Styles.box}></div>
        <div className={Styles.box}></div>
        <div className={Styles.box}></div>
      </section>        
      <section className={Styles.container}>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.coin}>
            <img src="images/coin.svg" alt="moneda" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.peso}>
            <div>
              <span>Se establece como unidad monetaria </span>
              <span>argentina el Peso Moneda Nacional</span>
            </div>
          </Zoom>
          <Slide triggerOnce className={Styles.year0}>
            <span className={Styles.year}>Años</span>
          </Slide>
          <Slide triggerOnce className={Styles.year1}>
          <span className={Styles.year}>
            1899
            <img src="images/arrow.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM1}>
            <span className={Styles.yearM}>1900</span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM2}>
            <span className={Styles.yearM}>1910</span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM3}>
            <span className={Styles.yearM}>1920</span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM4}>
            <span className={Styles.yearM}>1930</span>
          </Slide>
          <Slide triggerOnce className={Styles.year2}>
          <span className={Styles.year}>
            1935
            <img src="images/arrow.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year3}>
          <span className={Styles.year}>
            1936
            <img src="images/arrow.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM5}>
            <span className={Styles.yearM}>1940</span>
          </Slide>
          <Slide triggerOnce className={Styles.year4}>
          <span className={Styles.year}>
            1944
            <img src="images/arrow.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM6}>
            <span className={Styles.yearM}>1950</span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM7}>
            <span className={Styles.yearM}>1960</span>
          </Slide>
          <Slide triggerOnce className={Styles.year5}>
          <span className={Styles.year}>
            1961
            <img src="images/arrow.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year6}>
          <span className={Styles.year}>
            1970
            <img src="images/arrow.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year7}>
          <span className={Styles.year}>
            1972
            <img src="images/arrowA.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year8}>
          <span className={Styles.year}>
            1973
            <img src="images/arrowA.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year9}>
          <span className={Styles.year}>
            1976
            <img src="images/arrowA.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year10}>
          <span className={Styles.year}>
            1979
            <img src="images/arrowA.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year11}>
          <span className={Styles.year}>
            1980
            <img src="images/arrowA.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year12}>
          <span className={Styles.year}>
            1981
            <img src="images/arrowA.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year13}>
          <span className={Styles.year}>
            1983
            <img src="images/arrowV.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year14}>
          <span className={Styles.year}>
            1984
            <img src="images/arrowV.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year15}>
          <span className={Styles.year}>
            1985
            <img src="images/arrowR.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year16}>
          <span className={Styles.year}>
            1988
            <img src="images/arrowR.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year17}>
          <span className={Styles.year}>
            1989
            <img src="images/arrowR.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year18}>
          <span className={Styles.year}>
            1990
            <img src="images/arrowR.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year19}>
          <span className={Styles.year}>
            1991
            <img src="images/arrowN.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM8}>
            <span className={Styles.yearM}>2000</span>
          </Slide>
          <Slide triggerOnce className={Styles.year20}>
          <span className={Styles.year}>
            2001
            <img src="images/arrowN.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM9}>
            <span className={Styles.yearM}>2010</span>
          </Slide>
          <Slide triggerOnce className={Styles.year21}>
          <span className={Styles.year}>
            2016
            <img src="images/arrowN.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.year22}>
          <span className={Styles.year}>
            2017
            <img src="images/arrowN.svg" alt="punta de flecha" />
          </span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM10}>
            <span className={Styles.yearM}>2020</span>
          </Slide>
        </div>
        <div className={Styles.box}>
          <Fade triggerOnce duration={1350} style={{zIndex: '99', position: 'relative', top: '5%'}}>
            <img src="images/p1.svg" style={{width: 'calc(314% + 6px)'}} alt="1899 - 1970" />
          </Fade>
          <Fade triggerOnce duration={1350} style={{zIndex: '99', position: 'relative', top: '4%'}}>
            <img src="images/p2.svg" style={{width: 'calc(614% + 10px)'}} alt="1970 - 1983" />
          </Fade>
          <Fade triggerOnce duration={1350} style={{zIndex: '99', position: 'relative', top: '2.65%'}}>
            <img src="images/p3.svg" style={{width: 'calc(214% + 4px)'}} alt="1983 - 1985" />
          </Fade>
          <Fade triggerOnce duration={1350} style={{zIndex: '99', position: 'relative', top: '1.55%'}}>
            <img src="images/p4.svg" style={{width: 'calc(514% + 8px)'}} alt="1985 - 1991" />
          </Fade>
          <Fade triggerOnce duration={1350} style={{zIndex: '99', position: 'relative', top: '-0.166%', height: 'calc(100.5% - 6px)'}}>
            <img src="images/p5.svg" style={{width: 'calc(275% + 4px)',height: '24.8%'}} alt="1991 - 2020" />
          </Fade>
          <Zoom triggerOnce duration={1500} className={Styles.c20}>
            <img src="images/20c.svg" alt="20 centavos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_5p}>
            <img src="images/5p.svg" alt="5 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100ppV}>
            <img src="images/100ppV.svg" alt="100 pesos" onClick={handleClick1983}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.pesoMN}>
            <div>
              <div className={Styles.year}>Peso</div>
              <div className={Styles.year}>Moneda</div>
              <div className={Styles.year}>Nacional</div>
            </div>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.pesoLey}>
            <div>
              <div className={Styles.year}>Peso</div>
              <div className={Styles.year}>Ley</div>
            </div>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.pesoArgentino}>
            <div>
              <div className={Styles.year}>Peso</div>
              <div className={Styles.year}>Argentino</div>
            </div>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.austral}>
              <div className={Styles.year}>Austral</div>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.pesoArgentino2}>
            <div>
              <div className={Styles.year}>Peso</div>
              <div className={Styles.year}>Argentino</div>
            </div>
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100p}>
            <img src="images/100p.svg" alt="100 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100pp}>
            <img src="images/100pp.svg" alt="100 pesos" onClick={handleClick1970}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500p}>
            <img src="images/500p.svg" alt="500 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100ppR}>
            <img src="images/100ppR.svg" alt="100 pesos" onClick={handleClick1985b}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100ppN}>
            <img src="images/100ppN.svg" alt="100 pesos" onClick={handleClick1991}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_patacon}>
            <img src="images/patacon.svg" alt="patacon" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_lecop}>
            <img src="images/lecop.svg" alt="lecop" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500pN}>
            <img src="images/500pN.svg" alt="500 pesos" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.stability}>
            <img src="images/36estab.svg" alt="36 años de estabilidad" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bcra}>
            <img src="images/BCRA.svg" alt="BCRA" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000p}>
            <img src="images/1000p.svg" alt="1000 pesos" />
          </Zoom> 
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000pA}>
            <img src="images/1000pA.svg" alt="1000 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_5000pV}>
            <img src="images/5000pV.svg" alt="5000 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.remove00_1985}>
            <img src="images/dos00.svg" alt="quita de dos ceros" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_10000ppV}>
            <img src="images/10000ppV.svg" alt="10000 pesos" onClick={handleClick1985}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000pR}>
            <img src="images/1000pR.svg" alt="1000 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000pN}>
            <img src="images/1000pN.svg" alt="1000 pesos" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.bill_10000pp}>
            <img src="images/10000pp.svg" alt="10000 pesos" onClick={handleClick1961} />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.remove00_1970}>
            <img src="images/dos00.svg" alt="quita de dos ceros" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_10000pA}>
            <img src="images/10000pA.svg" alt="10000 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_50000pR}>
            <img src="images/50000pR.svg" alt="50000 pesos" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100000pA}>
            <img src="images/100000pA.svg" alt="100000 pesos" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500000pA}>
            <img src="images/500000p.svg" alt="500000 pesos" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000000pA}>
            <img src="images/1000000pp.svg" alt="1000000 pesos" onClick={handleClick1981}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500000ppR}>
            <img src="images/500000ppR.svg" alt="500000 pesos" onClick={handleClick1990}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.remove00_1991}>
            <img src="images/dos00.svg" alt="quita de dos ceros" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.remove0000_1983}>
            <img src="images/4ceros.svg" alt="quita de cuatro ceros" />
          </Zoom>
        </div>
      </section>
    </div>
    <div style={{position: 'relative', top: '0', left: '0', backgroundColor: '#E6E6E6', borderBottom: 'solid 0.275rem #E26E2B'}} >
      <Fade triggerOnce duration={1550}>
        <img src="images/rallas2.svg"  style={{width: 'calc(51.7%)'}} alt="fondo de rallas" />
      </Fade>
      <Zoom triggerOnce duration={1500} style={{position: 'absolute', top: '-20%', left: '47.5%', width: '5%'}}>
        <img src="images/question.svg"  style={{width: '100%'}} alt="signo de pregunta" />
      </Zoom>
      <Zoom triggerOnce duration={1500} style={{position: 'absolute', bottom: '-27.5%', left: '45%', width: '10%'}}>
        <img src="images/10000pN.svg"  style={{width: '100%'}} alt="10000 pesos" />
      </Zoom>
    </div>
    </section>
  )
}
 
export default Depreciation;