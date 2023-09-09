import React from 'react'
import Input from '../Input/Input'
import style from './Button.module.scss'

type ButtonPropT = {
    value:string
}

function Button({value}:ButtonPropT) {
  return (
    <Input type='button' value={value} className={style.button} />
  )
}

export default Button