import './App.css'
import Home from './Home.jsx'

function App() {
  const url = 'http://98.80.229.1:3001/'
  return (
    <div>
      <Home url={url}/>
    </div>
  )
}

export default App
