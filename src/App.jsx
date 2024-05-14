
import './index.css';
import Navbar from './components/Navbar'
import ContactUs from './components/Contactus';
import img from './assets/green-charge.jpg';



function App() {


  return (
    <>

      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>



        <div className="bodycontent">
          <div className='contactdiv'>
            <ContactUs />
          </div>




          <div className='imagediv'>
            <div>
              <marquee className="greentext" direction="">We believe in green energy</marquee>
              <h6 className='pgtext'>What Do We Focus On
                Reliable Chargers & Outstanding Service</h6>
            </div>

            <div className='pgtext'>GoGreenSolar Charger prioritizes two things above all: top-tier product quality and exceptional customer service. Our commitment to building lasting partnerships with our customers is unmatched. By consistently setting and surpassing industry standards, we ensure every GoGreenSolar charger offers reliability and efficiency. Our comprehensive suite of services complements our product range, ensuring our customers satisfaction remains unmatched.</div>

            <img className='bg-image' src={img} alt="An Image of charging station with blue solar pannel at roof" />

          </div>

        </div>

      </div>

    </>
  )
}

export default App
