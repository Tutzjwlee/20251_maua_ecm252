import React from 'react'
import Feedback from './Feedback'
const textoOK = 'Aprovar'
const textoNOK = 'Não Aprovar'
const functionOK = () => alert('agradecemos a confirmacao')
const functionNOK = () => alert('Verificamos o ocorrido')
const componenteFeeback = (
  <Feedback
    textoOK={textoOK}
    textoNOK={textoNOK}
    functionOK={functionOK}
    functionNOK={functionNOK}
  />
)
const Cartao = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                {props.children}
            </div>
            <div className="card-footer">
                {componenteFeeback}
                </div>
        </div>
        
    )
}
export default Cartao
