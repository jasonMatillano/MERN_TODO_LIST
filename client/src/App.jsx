import './App.css'
import Home from './Home.jsx'

function App() {
  const url = 'http://localhost:3001/'
  return (
    <div>
      <Home url={url}/>
    </div>
  )
}

export default App
