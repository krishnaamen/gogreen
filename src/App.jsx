
import './index.css';
import Navbar from './components/Navbar'
import ContactUs from './components/Contactus';
import img from './assets/green-charge.png';


function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>




        <div><marquee behavior="" direction=""> We are expert in solar charging solutions</marquee></div>

        <div className="bodycontent">
          <div className='contactdiv'>
            <ContactUs />
          </div>
          <div className='imagediv'>
            <img className='bg-image' src={img} alt="img" />
          </div>




        </div>




      </div>

    </>
  )
}

export default App
