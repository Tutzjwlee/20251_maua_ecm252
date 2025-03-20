import React from 'react'
import Cartao from './Cartao'
import Comentarios from './Comentarios'
import image from './images/hero.jpg'
import ListaComentarios from './ListaComentarios'
const App = () => {
  return (
    <div>
      <div className="container border mt-2">
        <div className="row">
          <div className="col-lg-12 col-xxl-4">
            <ListaComentarios>
            <Cartao>
              <Comentarios
                image={image}
                nome='Arthur'
                texto='Um profissional multifacetado, cuja trajetória é marcada por uma incansável busca pelo conhecimento, inovação e excelência. Nascido e criado em São Paulo, desde jovem demonstrou uma curiosidade insaciável pelo funcionamento das coisas ao seu redor, desmontando brinquedos para entender seus mecanismos e programando pequenas rotinas no computador de seu pai aos 10 anos de idade. Essa inquietação intelectual logo se transformou em uma paixão pela tecnologia, levando-o a se aprofundar nos campos da programação, engenharia de software e inteligência artificial.'
                time='12:00'
              />
            </Cartao>
            <Cartao
              >
              <Comentarios
                image={image}
                nome='Arthur'
                texto='Um profissional multifacetado, cuja trajetória é marcada por uma incansável busca pelo conhecimento, inovação e excelência. Nascido e criado em São Paulo, desde jovem demonstrou uma curiosidade insaciável pelo funcionamento das coisas ao seu redor, desmontando brinquedos para entender seus mecanismos e programando pequenas rotinas no computador de seu pai aos 10 anos de idade. Essa inquietação intelectual logo se transformou em uma paixão pela tecnologia, levando-o a se aprofundar nos campos da programação, engenharia de software e inteligência artificial.'
                time='12:00'
              />

            </Cartao>
            <Cartao
              >
              <Comentarios
                image={image}
                nome='Arthur'
                texto='Um profissional multifacetado, cuja trajetória é marcada por uma incansável busca pelo conhecimento, inovação e excelência. Nascido e criado em São Paulo, desde jovem demonstrou uma curiosidade insaciável pelo funcionamento das coisas ao seu redor, desmontando brinquedos para entender seus mecanismos e programando pequenas rotinas no computador de seu pai aos 10 anos de idade. Essa inquietação intelectual logo se transformou em uma paixão pela tecnologia, levando-o a se aprofundar nos campos da programação, engenharia de software e inteligência artificial.'
                time='12:00'
              />

            </Cartao>
            </ListaComentarios>
          </div>
          <div className="col-lg-12 col-xxl-4">

          </div>
          <div className="col-lg-12 col-xxl-4">

          </div>
        </div>
      </div>
    </div>
  )
}
export default App
