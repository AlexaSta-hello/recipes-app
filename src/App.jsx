import './App.css'
import Header from './scenes/Header'
import Card from './scenes/Card'

function App() {

  return (
    <div className="App">
      <main className="main_container">
        <section>
          <Header />
        </section>
        <section className="cards">
          <Card />
        </section>
        
      </main>
    </div>
  )
}

export default App
