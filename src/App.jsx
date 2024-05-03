
import './App.css';
import Navbar from './components/Navbar'
import ContactUs from './components/contactus';

function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <body>
          <ContactUs />
        </body>
      </div>

    </>
  )
}

export default App
