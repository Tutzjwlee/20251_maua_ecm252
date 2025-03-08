import Pedidos from './Pedidos'
const App = () => {
  return (
    <div className="container border mt-2 ">
      <div className="row">

        <div className="col-lg-6 col-xxl-3">

          <Pedidos
            data={new Date().toLocaleDateString()}
            titulo="SSD"
            descricao="Um SSd de 512Gb"
            icone="hdd" />

        </div>
        <div className="col-lg-6 col-xxl-3">

          <Pedidos
            data="25/05/2024"
            titulo="Livro"
            descricao="Harry Potter"
            icone="book" />

        </div>
        <div className="col-lg-6 col-xxl-3">

          <Pedidos
            data="12/09/2024"
            titulo="Hippo"
            descricao="Adult hippo"
            icone="hippo" />


        </div>
        <div className="col-lg-6 col-xxl-3">

          <Pedidos
            data="13/012/2024"
            titulo="SnowMan"
            descricao="Um boneco de neve magico"
            icone="snowman fa-shake" />


        </div>
      </div>

    </div>
  )
}

export default App