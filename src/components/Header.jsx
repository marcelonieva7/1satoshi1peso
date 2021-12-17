import React from 'react'
import { equal } from '../assets/styles/Header.module.css'

const Header = () => {
  const BTCARS = 12596000
  const BTCUSD = 67000
  const formatCurrency = (number) => Intl.NumberFormat('es-AR').format(number)
  return (
    <header>
      <span>1 BTC</span>
      <span className={equal}> = </span>
      <span>{formatCurrency(BTCUSD)} USD</span>
      <span className={equal}> = </span>
      <span>{formatCurrency(BTCARS)} ARS</span>
      <span className={equal}> = </span>
      <span>100.000.000 SAT</span>
    </header>
  )
}
 
export default Header;