import React from 'react'
import  Button  from 'react-bootstrap/Button'
import "./BotaoSucesso.css"
import { database } from '../../firebaseConfig'
import { ref, set } from 'firebase/database'

function BotaoSucesso() {
  
  const changeStatusToOn = () => {
    set(ref(database, '/'), {
      LED_STATUS: 'ON'
    })
  } 
  
  return (
    <div> 
        <Button variant="success" size="lg" id="btn-sucess" onClick={() => changeStatusToOn()}>Ligar</Button>{' '}
    </div>
  )
}

export default BotaoSucesso