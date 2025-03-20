import React from 'react'

const Comentarios = (props) => {
  return (
    <div className="d-flex">
        <div className="d-flex align-items-center">
                <img src={props.image} alt="" width="200" height="200"/>
            </div>
        <div className="border flex-grow-1 py-3 ms-3 d-flex flex-column">
          <div className="div flex-grow-1">
            <h2>
            {props.nome}
            </h2>
            {props.texto}
          </div>
          <div className="text-muted mt-auto">
                {props.time}
          </div>
        </div>
    
    </div>
  )
}
export default Comentarios
