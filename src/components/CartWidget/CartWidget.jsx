import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faCartPlus} style={{color: "white", fontSize: '1.2rem'}}/>
        <span style={{color: "white", fontSize: '1.2rem', marginLeft: "0.5rem"}}>10</span>
    </div>
  )
}

export default CartWidget
