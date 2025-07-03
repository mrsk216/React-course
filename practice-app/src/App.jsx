import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const authData = localStorage.getItem("auth");
    if (authData) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const [formData, setFormData] = useState({
    'email': '',
    'password': ''
  });

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try{
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData,
        {
          headers:{
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response);
      if(response.status === 200){
        localStorage.setItem("auth", JSON.stringify(response.data));
        setFormData({
          email: "",
          password: "",
        });
        navigate('/dashboard');
      }else{
        console.worm('Something is wrong, try again!');
      }
    }catch(err){
      console.error('Login authentication', err)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <form onSubmit={handleLogin}>
              <h1 className="text-center mb-5">Login Your Account</h1>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleFormDataChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData?.password}
                  onChange={handleFormDataChange}
                  className="form-control"
                />
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