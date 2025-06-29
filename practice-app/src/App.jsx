import { Link } from "react-router";

function App() {  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <form>
              <h1 className="text-center mb-5">Login Your Account</h1>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="text-center mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </div>
              <div className="text-center mb-3">
                <small>
                  Do not have an account?
                  <Link to={"/register"} className="ms-2">
                    Create new account
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App