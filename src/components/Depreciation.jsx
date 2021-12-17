import React from 'react'
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import Swal from 'sweetalert2';
import Bill3d from './svg/Bill3d';
import Bill4d from './svg/Bill4d';
import Bcra from './svg/Bcra';
import C20 from './svg/C20';
import Coin from './svg/Coin';
import P5 from './svg/P5';
import Stability from './svg/Stability';
import Zone1 from './svg/Zone1';
import Zone2 from './svg/Zone2';
import Zone3 from './svg/Zone3';
import Zone4 from './svg/Zone4';
import Zone5 from './svg/Zone5';
import Bill5dEye from './svg/Bill5dEye';
import Bill3dPlus from './svg/Bill3dPlus';
import Bill5d from './svg/Bill5d';
import Bill6d from './svg/Bill6d';
import Bill7dEye from './svg/Bill7dEye';
import Bill6dEye from './svg/Bill6dEye';
import Remove00 from './svg/Remove00';
import Remove0 from './svg/Remove0';
import Background1 from './svg/Backgroun1';
import MainBill from './svg/MainBill';
import Question from './svg/Question';
import Styles from '../assets/styles/Depreciation.module.css'
import Arrow from './svg/Arrow';

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
            <Coin />
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
            <span className={Styles.year}>1899<Arrow /></span>
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
            <span className={Styles.year}>1935<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year3}>
            <span className={Styles.year}>1936<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM5}>
            <span className={Styles.yearM}>1940</span>
          </Slide>
          <Slide triggerOnce className={Styles.year4}>
            <span className={Styles.year}>1944<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM6}>
            <span className={Styles.yearM}>1950</span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM7}>
            <span className={Styles.yearM}>1960</span>
          </Slide>
          <Slide triggerOnce className={Styles.year5}>
            <span className={Styles.year}>1961<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year6}>
            <span className={Styles.year}>1970<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year7}>
            <span className={Styles.year}>1972<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year8}>
            <span className={Styles.year}>1973<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year9}>
            <span className={Styles.year}>1976<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year10}>
            <span className={Styles.year}>1979<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year11}>
            <span className={Styles.year}>1980<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year12}>
            <span className={Styles.year}>1981<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year13}>
            <span className={Styles.year}>1983<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year14}>
            <span className={Styles.year}>1984<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year15}>
            <span className={Styles.year}>1985<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year16}>
          <span className={Styles.year}>1988<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year17}>
            <span className={Styles.year}>1989<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year18}>
            <span className={Styles.year}>1990<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year19}>
            <span className={Styles.year}>1991<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM8}>
            <span className={Styles.yearM}>2000</span>
          </Slide>
          <Slide triggerOnce className={Styles.year20}>
            <span className={Styles.year}>2001<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM9}>
            <span className={Styles.yearM}>2010</span>
          </Slide>
          <Slide triggerOnce className={Styles.year21}>
            <span className={Styles.year}>2016<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.year22}>
            <span className={Styles.year}>2017<Arrow /></span>
          </Slide>
          <Slide triggerOnce className={Styles.yearM10}>
            <span className={Styles.yearM}>2020</span>
          </Slide>
        </div>
        <div className={Styles.box}>
          <Fade triggerOnce duration={1350} className={Styles.period1}>
            <Zone1 />
          </Fade>
          <Fade triggerOnce duration={1350} className={Styles.period2}>
            <Zone2 />
          </Fade>
          <Fade triggerOnce duration={1350} className={Styles.period3}>
            <Zone3 />
          </Fade>
          <Fade triggerOnce duration={1350} className={Styles.period4}>
            <Zone4 />
          </Fade>
          <Fade triggerOnce duration={1350} className={Styles.period5}>
            <Zone5 />
          </Fade>
          <Zoom triggerOnce duration={1500} className={Styles.c20}>
            <C20 />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_5p}>
            <P5 />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100ppV}>
            <Bill3dPlus digit="$100" handleClick={handleClick1983} />
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
            <Bill3d digit="$100" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100pp}>
            <Bill3dPlus digit="$100" handleClick={handleClick1970} />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500p}>
            <Bill3d digit="$500" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100ppR}>
            <Bill3dPlus digit="$100" handleClick={handleClick1985b}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100ppN}>
            <Bill3dPlus digit="$100" handleClick={handleClick1991}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_patacon}>
            <Bill5d digit="Patacon" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_lecop}>
            <Bill3d digit="Lecop" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500pN}>
            <Bill3d digit="$500" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.stability}>
            <Stability />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bcra}>
            <Bcra />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000p}>
            <Bill4d digit="$1.000"/>
          </Zoom> 
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000pA}>
            <Bill4d digit="$1.000" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_5000pV}>
            <Bill4d digit="$5.000" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.remove00_1985}>
            <Remove0 text="Se le quitan 2 ceros" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_10000ppV}>
            <Bill5dEye digit="$10.000" handleClick={handleClick1985}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000pR}>
            <Bill4d digit="$1.000" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000pN}>
            <Bill4d digit="$1.000" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.bill_10000pp}>
            <Bill5dEye digit="$10.000" handleClick={handleClick1961}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.remove00_1970}>
            <Remove00 />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_10000pA}>
            <Bill5d digit="$10.000" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_50000pR}>
            <Bill5d digit="$50.000" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.bill_100000pA}>
            <Bill6d digit="$100.000" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500000pA}>
            <Bill6d digit="$500.000" />
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_1000000pA}>
            <Bill7dEye digit="$1.000.000" handleClick={handleClick1981}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.bill_500000ppR}>
            <Bill6dEye digit="$500.000" handleClick={handleClick1990}/>
          </Zoom>
          <Zoom triggerOnce duration={1500} className={Styles.remove00_1991}>
            <Remove0 text="Se le quitan 2 ceros" />
          </Zoom>
        </div>
        <div className={Styles.box}>
          <Zoom triggerOnce duration={1500} className={Styles.remove0000_1983}>
            <Remove0 text="Se le quitan 4 ceros" />
          </Zoom>
        </div>
      </section>
    </div>
    <div style={{position: 'relative', top: '0', left: '0', backgroundColor: '#E6E6E6', borderBottom: 'solid 0.275rem #E26E2B'}}>
      <Background1 mainClass={Styles.bg_question} />
      <Zoom triggerOnce duration={1500} style={{position: 'absolute', top: '-20%', left: '47.5%', width: '5%'}}>
        <Question />
      </Zoom>
      <Zoom triggerOnce duration={1500} className={Styles.bill_10000pN}>
        <MainBill  />
      </Zoom>
    </div>
    </section>
  )
}
 
export default Depreciation;