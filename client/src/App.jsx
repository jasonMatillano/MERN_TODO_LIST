import './App.css'
import Home from './Home.jsx'

function App() {
  const url = 'http://3.95.188.153:3001/'
  return (
    <div>
      <Home url={url}/>
    </div>
  )
}

export default App
