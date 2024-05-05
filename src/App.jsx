
import './App.css';
import Navbar from './components/Navbar'
import Contactus from './components/Contactus'
import logo from './assets/logo.png'

function App() {


  return (
    <>
      <div className="App">
        <Navbar />
        <div className='bodydiv'>
          <div>

          </div>
          <div>
            <Contactus />
          </div>

        </div>


      </div>

    </>
  )
}

export default App
