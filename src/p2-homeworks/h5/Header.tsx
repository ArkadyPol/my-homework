import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import s from './Header.module.css'

function Header() {
  return (
      <div className={s.header}>
        {/* add NavLinks*/}
        <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>pre-junior</NavLink>
        <NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink>
        <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>junior+</NavLink>
      </div>
  )
}

export default Header
