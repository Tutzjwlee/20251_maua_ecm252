import React from 'react'
import Imagem from './Imagem'

const ListaImagem = ({photos, imgStyle}) => {
  return (
    photos.map((photo, key) => (
    <Imagem imgStyle={imgStyle} src ={photo.src.small} alt={photo.alt} />))
  )
}

export default ListaImagem
