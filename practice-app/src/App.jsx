import Header from './Component/Header'
import { FaHireAHelper, FaUserGraduate } from "react-icons/fa"
import About from './Component/About'
import Service from './Component/Service'

function App() {
  
  return (
    <>
      <Header />
      <section className="home-hero" onClick={() => console.log('home hero has been clicked')}>
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100" onClick={() => console.log('row has been clicked')}>
            <div className="col-12 col-lg-8 col-xl-6 d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-5 fw-bold text-green-600"><FaUserGraduate className='faUserGraduate' />Shekh Md Mohsin</h1>
              <p className="text-center mt-3 mb-4" onClick={() => console.log('p has been clicked')}>
                A Result-Oriented Web Developer building and managing Websites
                and Web Applications that leads to the success of the overall
                product
              </p>
              <button className="btn btn-custom d-flex align-items-center gap-2" onClick={(e) => {
                e.stopPropagation();
                console.log('btn has been clicked');
              }}>
                <FaHireAHelper />  Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>

      <About />
      
      <Service />
    </>
  );
}

export default App
