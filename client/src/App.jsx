import './App.css'
import Home from './Home.jsx'

function App() {
  const url = 'http://54.162.254.65:3001/'
  return (
    <div>
      <Home url={url}/>
    </div>
  )
}

export default App
