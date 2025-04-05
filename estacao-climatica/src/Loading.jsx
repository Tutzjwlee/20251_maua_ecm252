import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (//flex-column muda o eixo principal para vertical
            <div className="d-flex flex-column justify-content-center align-items-center border rounded p-3">
                <div
                    className="spinner-border text-primary"
                    style={{ width: '3rem', height: '3rem' }}>
                </div>
                <p className="text-primary">{this.props.mensagem}</p>
            </div>
        )
    }
}
//mensagem default caso nao tenha no props
Loading.defaultProps = {
    mensagem:"Aguardando...."
}