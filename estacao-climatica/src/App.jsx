import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    };
  }

  estacao = {
    VERAO: { icone: "sun", nome: "Verão" },
    INVERNO: { icone: "snowman", nome: "Inverno" },
    OUTONO: { icone: "leaf", nome: "Outono" },
    PRIMAVERA: { icone: "fan", nome: "Primavera" }
  };

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    const d1 = new Date(anoAtual, 5, 21);
    const d2 = new Date(anoAtual, 8, 24);
    const d3 = new Date(anoAtual, 11, 22);
    const d4 = new Date(anoAtual, 2, 21);

    const estouNoSul = latitude < 0;
    if (data >= d1 && data < d2) {
      return estouNoSul ? this.estacao.INVERNO : this.estacao.VERAO;
    }
    if (data >= d2 && data < d3) {
      return estouNoSul ? this.estacao.PRIMAVERA : this.estacao.OUTONO;
    }
    if (data >= d3 || data < d4) {
      return estouNoSul ? this.estacao.VERAO : this.estacao.INVERNO;
    }
    return estouNoSul ? this.estacao.OUTONO : this.estacao.PRIMAVERA;
  };

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date(); // Mantém como objeto Date
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude);
        const icone = estacao.icone;

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude, // Corrigido
          estacao: estacao.nome,
          data: dataAtual.toLocaleDateString(),
          icone: icone
        });
      },
      (err) => {
        this.setState({
          mensagemDeErro : 'Habilite a localização'})
      }
    );
  };


  render() {
    return (
      <div>
        <div className="container mt-2 text-center">
          <div className="row">
            <div className="col-12">
              <div className="justify-content-center d-flex">
                <i className="fa-hippo fas fa-3x"></i>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6 col-xxl-4">
              <div className="card">
                <div className="card-body">
                  <div
                    className="d-flex align-items-center border rounded mb-2"
                    style={{ height: "6rem" }}
                  >
                    <i className={`fas fa-5x fa-${this.state.icone}`}></i> {/* Corrigido */}
                    <p className="w-75 ms-3 text-center fs-1">
                      {this.state.estacao}
                    </p>
                  </div>
                  <div>
                    <p className='text-center'>
                      {
                        this.state.latitude ?
                          `Coordenadas: ${this.state.latitude}, ${this.state.longitude}, Data: ${this.state.data}`
                          :
                            this.state.mensagemDeErro?
                              `${this.state.mensagemDeErro}`
                            :
                              "Clique no botão para saber sua estação"

                      }
                    </p>
                  </div>
                  <button type="button" 
                  className='btn btn-primary w-100 mt-3'
                  onClick={()=>this.obterLocalizacao()}
                  >Qual a minha estação?</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
