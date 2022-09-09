import React from 'react'
import Card from 'react-bootstrap/Card';
import './CardPessoa.css'


function CardPessoa(props) {
    return (
        <div id='card-pessoa'>

            <Card id="cardPortras">
                <Card.Img id="img" src={props.caminho} />
                <Card.Body>
                    <Card.Title id="titulo">{props.nomePessoa}</Card.Title>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CardPessoa