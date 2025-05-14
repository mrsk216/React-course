import Header from './Component/Header'

function App() {
  
  return (
    <>
      <Header />
      <section className="home-hero">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-8 col-xl-6 text-center">
              <h1 className="display-5 fw-bold">Shekh Md Mohsin</h1>
              <p className="mt-3 mb-4">
                A Result-Oriented Web Developer building and managing Websites
                and Web Applications that leads to the success of the overall
                product
              </p>
              <a href="" className="btn btn-custom">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
