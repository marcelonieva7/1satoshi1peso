import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import {
  container,
  prizeContainer,
  prize,
  formContainer,
  targetDate,
  betsList,
  betPrize,terms,
  termsLabel,
  betSize,
  form_error,
  green,
  red,
  expired
} from '../assets/styles/BetForm.module.css'

const BetForm = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSelectedDate, setIsSelectedDate] = useState(false)
  const [termsError, setTermsError] = useState(null)
  const termsRef = useRef(null)

  const POOL = 1259
  const BETS = [
    {
      date: '2021-09-24',
      size: 10,
      targetDate: '2025-06-30',
      prize: 500
    },
    {
      date: '2021-09-24',
      size: 10,
      targetDate: '2021-11-30',
      prize: 2000
    },
    {
      date: '2021-09-24',
      size: 10,
      targetDate: '2025-06-30',
      prize: 1400
    }
  ]
  const formatDate = (stringDate) => new Date(stringDate).toLocaleDateString('es-AR', {month: '2-digit', day: '2-digit', year: 'numeric'})
  const minDateToday = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    if(month < 10) {
      return `${year}-0${month}-${day}`
    }
    return `${year}-${month}-${day}`
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { targetDate, size, customSize } = e.target
    const betSize = size.value === 'custom' ? customSize.value : size.value
    const data = {
      date: targetDate.value,
      betSize
    }
    alert(JSON.stringify(data))
  }
  const TYC = `“Términos y Condiciones” es el documento que rige la relación contractual entre el proveedor de un servicio y el usuario. En la web, este documento a menudo también se denomina “Condiciones de servicio” (ToS), “Condiciones de uso”, EULA (“Acuerdo de licencia de usuario final”), “Condiciones generales” o “Notas legales”.
  Los Términos y Condiciones no son más que un contrato en el que el titular aclara las condiciones de uso de su servicio. Algunos ejemplos son el uso del contenido (derechos de autor), las reglas que los usuarios deben seguir mientras interactúan entre sí en el sitio web/app, las reglas relacionadas con la cancelación o suspensión de la cuenta de un usuario, etc.  
  Se debe prestar especial atención a las cláusulas de limitación de responsabilidad (y descargos de responsabilidad), por ejemplo, en caso de mal funcionamiento de la aplicación o el sitio web.
  Los Términos y Condiciones representan el documento que ayuda a prevenir y resolver los problemas. Por ello, son fundamentales en muchos casos para defenderse en caso de abuso.
  `
  const handleTermsClick = () => {
    Swal.fire({
      title: 'Terminos y condiciones',
      text: TYC,
      width: '90%',
      confirmButtonText: 'Cerrar'
    })
  }
  const handleTermsChange = ({checked}) => {
    if (isSubmitted) {
      checked && setTermsError(null)
      !checked && setTermsError('Para continuar acepta los terminos y condiciones')
    }
  }
  const handleDateChange = () => {
    setIsSelectedDate(true)
  }
  const checkErrors = () => {
    if (!termsRef.current.checked) {
      setTermsError('Para continuar acepta los terminos y condiciones')
    } else {
      setTermsError(null)
    }
    setIsSubmitted(true)
  }
  return (
    <section className={container}>
      <div className={prizeContainer}>
        <h2>¿Te animás a adivinar la fecha exacta en que el Satoshi igualará al Peso Argentino?</h2>
        <h4>¡¡¡Si acertás te llevas el pozo acumulado!!!</h4>
        <div className={prize}>
          <h3>Pozo acumulado</h3>
          <div>
          {POOL.toString().split('').map((element, idx)=> <span key={idx}>{element}</span>)}
          <span>PER</span>
          </div>
          <a href="##">¿Qué es un peronio?</a>
        </div>
        <img src="images/box.svg" alt="cofre" />
      </div>
      <div className={formContainer}>
        <h2>¡Jugatela!</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className={targetDate}>
              <label htmlFor="targetDate">Elegí una fecha:</label>
              <input type="date" required name="date" id="targetDate" min={minDateToday()} className={isSelectedDate ? green : (isSubmitted ? red : '')} onChange={({target}) => {handleDateChange(target)}}/>
            </div>
            <div className={betSize}>
              <span >Selecciona un monto a jugar:</span>
              <div>
                <input type="radio" name="size" onClick={()=> {setIsSelected(false)}} id="size1" value="10" defaultChecked/><label htmlFor="size1">10 PER</label>
                <input type="radio" name="size" onClick={()=> {setIsSelected(false)}} id="size2" value="50" /><label htmlFor="size2">50 PER</label>
                <input type="radio" name="size" onClick={()=> {setIsSelected(false)}} id="size3" value="100" /><label htmlFor="size3">100 PER</label>
                <input type="radio" name="size" id="size4" value="custom" checked={isSelected} onChange={()=> console.log("")}/><label style={{visibility: 'hidden'}} htmlFor="size4"><input className={isSubmitted ? red : ''} style={{visibility: 'initial'}} type="number" required={isSelected} min="1" onFocus={()=>{setIsSelected(true)}} name="customSize" id="customSize"/><span onClick={()=>{setIsSelected(true)}}>PER</span></label>
              </div>
            </div>
          </fieldset>
          <div className={betsList}>
            <h3>Mis apuestas</h3>
            {BETS.map((bet, id) => (
              <div key={id}>
                <span className={new Date(bet.targetDate) < new Date() ? expired : ''}><i> </i>{`${formatDate(bet.date)} - ${bet.size} PER - ${formatDate(bet.targetDate)} - `}</span><span className={betPrize}>{` Premio estimado = ${bet.prize} PER`}</span>
              </div>
            ))}
          </div>
          <input ref={termsRef} required type="checkbox" name="terms" id="terms" onChange={({target})=> handleTermsChange(target)} className={terms} />
          <label className={termsLabel} htmlFor="terms">He leido y acepto los <span onClick={handleTermsClick}>términos y condiciones</span></label>
          {termsError && isSubmitted && <div className={form_error}>{termsError}</div>}
          <button onClick={checkErrors} type="submit">PARICIPAR</button>
        </form>
        <span >
          Los participantes eligen una fecha. Depositan la cantidad de PERONIOs que quieran jugar. Se acumulan en un POZO. El día que llega el valor 1 Bitcoin = 100.000.000 ARS. Se ejecuta el contrato inteligente y paga automáticamente a los ganadores de esa fecha. Se cierran las apuestas. El pozo se reparte de manera proporcional a lo que jugó cada uno en esa fecha ganadora.
        </span>
      </div>
    </section>
  )
}
 
export default BetForm;