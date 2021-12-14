import React from 'react'
import { equal } from '../assets/styles/Header.module.css'

const Header = () => {
  const btcArs = 12596000
  const btcUsd = 67000
  const formatCurrency = (number) => Intl.NumberFormat('es-AR').format(number)
  return (
    <header>
      <span>1 BTC</span>
      <span className={equal}> = </span>
      <span>{formatCurrency(btcUsd)} USD</span>
      <span className={equal}> = </span>
      <span>{formatCurrency(btcArs)} ARS</span>
      <span className={equal}> = </span>
      <span>100.000.000 SAT</span>
    </header>
  )
}
 
export default Header;