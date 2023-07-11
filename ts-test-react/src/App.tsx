import './App.css'
import Header from './components/Header'


function App() {
  

  return (
    <div className="App">
      <Header title="Meine Webseite" />
      <Header title="Boo" color="blue" />
      {/*
        TS kann Tippfehler und Fehler bei den Prop-Namen erkennen!
        <Header titel="Boo" colour="blue" />

        TS erkennt fehlende Props
        <Header color="#c0ff33" />
      */}
    </div>
  )
}

export default App
