import React from 'react'

const Button = ({label , className , disabled} : {label : string , className : string , disabled?:boolean}) => {
  return (
    <button className={`btn-hover ${className} hover:text-logo transition-all`} disabled={disabled}>
        {label}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </button>
  )
}

export default Button