import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

function Register() {
    const navigate = useNavigate();
    useEffect(() => {
        const authData = localStorage.getItem("auth");
        if (authData) {
          navigate("/dashboard");
        }
      }, [navigate]);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleFormDataChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const response = await axios.post(
            "http://127.0.0.1:8000/api/register", 
            user,
            {
                headers: {
                    'Content-Type' : 'application/json',
                }
            }
        );

        if(response.status === 200){
            localStorage.setItem("auth", JSON.stringify(response.data));
            setUser({
                name: "",
                email: "",
                password: "",
            });

            navigate('/dashboard');
        }else{
            console.log(response);
        }
    };

    

    return (
      <>
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <form onSubmit={handleFormSubmit}>
                <h1 className="text-center mb-5">Create new Account</h1>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={user.name}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={user.email}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={user.password}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                </div>
                <div className="text-center mb-3">
                  <small>
                    Already have an account?
                    <Link to={"/"} className="ms-2">
                      Login
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

export default Register;
