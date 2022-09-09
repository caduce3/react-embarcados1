import React from 'react'
import Card from 'react-bootstrap/Card';

import './CardTexto.css'

function CardTexto(props) {
  return (
    <div >
        <Card id="card-texto-princ" >
          <Card.Body id='card-texto'>
            <Card.Title id="card-titulo-texto">{props.titulo}</Card.Title>
            <Card.Text id="texto">{props.texto}</Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CardTexto