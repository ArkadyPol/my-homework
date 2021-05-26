import React from 'react'
import {AffairPriorityType, AffairType} from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (_id: number) => void // need to fix any
}

type ColorType = 'red' | 'yellow' | 'green'
type ColorsType = {
  [key in AffairPriorityType]: ColorType
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }// need to fix
  const colors: ColorsType = {
    high: 'red',
    middle: 'yellow',
    low: 'green',
  }
  return (
      <div className={s.affair}>
        {/*show some text*/}
        <div>{props.affair.name}</div>
        <div style={{color: colors[props.affair.priority]}}>{props.affair.priority}</div>
        <button onClick={deleteCallback}>X</button>
      </div>
  )
}

export default Affair
