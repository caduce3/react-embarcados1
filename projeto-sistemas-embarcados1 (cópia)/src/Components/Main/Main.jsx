import React from 'react'

import CardPessoa from '../CardPessoa/CardPessoa'
import BotaoSucesso from '../BotaoSucesso/BotaoSucesso'
import BotaoDanger from '../BotaoDanger/BotaoDanger'

import './Main.css'

import imgcadu from '../../assets/img/cadu.jpeg'
import imggeorgia from '../../assets/img/georgia.jpeg'
import imgallyson from '../../assets/img/allyson.png'
import imgOrientador from '../../assets/img/felipe_oliveira.png'
import CardTexto from '../CardTexto/CardTexto'

function Main() {

    return (
        <main id='main'>
            <section>
                <div id='parte1'>
                    <h2>TÓPICOS ESPECIAIS EM</h2>
                    <h1>Sistemas Embarcados 1</h1>
                </div>
                <p>Alunos</p>
                <div>
                    <CardPessoa nomePessoa="Carlos Eduardo" caminho={imgcadu}></CardPessoa>
                    <CardPessoa nomePessoa="Allyson Santos" caminho={imgallyson}></CardPessoa>
                    <CardPessoa nomePessoa="Georgia Oliveira" caminho={imggeorgia}></CardPessoa>
                </div>
                <p id='p-orientador'>Orientador</p>
                <div id='orientador'>
                    <CardPessoa nomePessoa="Felipe Denis" caminho={imgOrientador}></CardPessoa>
                </div>
            </section>
            <section>
                <div id='parte2'>
                    <h2>UM POUCO SOBRE O NOSSO PROJETO</h2>
                </div>
                <CardTexto titulo="INTRODUÇÃO" texto="Com a Iot está em constante crescimento, e dentro dela existe o conceito de Smart home, que tem se tornado cada vez mais presente nas casas. Uma aplicação de casa inteligente muito comum, é o de controle de iluminação automatizado ou controlado a distância pelo usuário. O acesso a placas de prototipação tem se tornado mais comum e, com isso, a possibilidade de aplicar a cultura maker e desenvolver nossa propria smart home. "></CardTexto>
                <div id="card-texto-div-2">
                    <CardTexto  titulo="OBJETIVOS" texto="O objetivo principal, foi desenvolver um projeto onde utilizando um sensor crepuscular, pudessemos controlar a iluminação por wi-fi ou bluetooth, utilizando o esp32 e uma conexão com o firebase. A implementação web/mobile foi desenvolvida utilizando o framework reactJS e as tecnologias básicas do desenvolvimento web (HTML5, CSS3 e JS)."></CardTexto>
                </div>
                <CardTexto titulo="DESCRIÇÃO DO PROTÓTIPO" texto="- 1 placa esp-32 - 1 módulo relé canal único - Jumpers - Conversor de nível lógico"></CardTexto>
            </section>
            <form id='parte3'>
                <h2>BOTÕES</h2>
                <BotaoSucesso ></BotaoSucesso>
                <BotaoDanger></BotaoDanger>
            </form>
        </main>
    )
}

export default Main