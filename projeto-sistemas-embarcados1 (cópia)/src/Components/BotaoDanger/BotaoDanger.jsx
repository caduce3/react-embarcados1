import React from 'react'
import  Button  from 'react-bootstrap/Button'
import './BotaoDanger.css'
import { database } from '../../firebaseConfig'
import { ref, set } from 'firebase/database'

function BotaoDanger() {

  const changeStatusToOff = () => {
    set(ref(database, '/'), {
      LED_STATUS: 'OFF'
    })
  } 

  return (
    <div> 
        <Button variant="danger" size="lg" id="btn-danger" onClick={() => changeStatusToOff()}>Desligar</Button>{' '}
    </div>
  )
}

export default BotaoDanger