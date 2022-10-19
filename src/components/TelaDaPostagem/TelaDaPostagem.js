import React from 'react'
import { ContainerPostagem, Image, Description } from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <h2>{props.tituloPostagem}</h2>
      <Image src={props.urlFoto} alt={props.descricao} />
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem