import './App.css'
import Home from './Home.jsx'

function App() {
  const url = 'http://3.95.203.97:3001/'
  return (
    <div>
      <Home url={url}/>
    </div>
  )
}

export default App
