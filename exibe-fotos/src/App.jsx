import env from "react-dotenv"
//import { createClient } from "pexels"
import pexelsClient from "../utils/pexelsClient"
import React from "react"
import Busca from "./components/Busca"
import PexelsLogo from "./components/PexelsLogo"
import ListaImagem from "./components/ListaImagem"

export default class App extends React.Component {

  // pexelsClient = null

  state = {
    photos: []
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   }).then(result => this.setState({ photos: result.photos }))
  // }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo
      }
    }).then(result => this.setState({ photos: result.data.photos }))
  }

  componentDidMount() {
    // this.pexelsClient = createClient(env.PEXELS_KEY)

  }

  render() {
    return (
      <div className="grid border-1 justify-content-center w-9 m-auto border-round border-200 " >
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de ...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="div col-6">
          <div className="grid">
            <ListaImagem imgStyle={'md:col-6 lg:col-4 xl:col-3'}
              photos={this.state.photos} />
          </div>
        </div>

      </div >

    )
  }
}