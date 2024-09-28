import './App.css'
import './button.scss'
import logo from './navbar-logo-light.png'

const App = () => {
  function handleClick() {
    // Do something when the button is clicked
    console.log('Button clicked!')
  }

  return (
    <div className="content">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Rsbuild with React 666</h1>
      <p>Start building amazing things with Rsbuild.</p>

      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
