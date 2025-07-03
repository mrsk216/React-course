import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function Dashboard() {
    const navigate = useNavigate();
    const [authData, setAuthData] = useState([]);
    useEffect(() => {
        setAuthData(JSON.parse(localStorage.getItem("auth")));
        if (!authData) {
            navigate("/");
        }
    }, [navigate, authData]);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/');
    }
    return (
      <>
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <h1>Welcome to visit our dashboard</h1>
              <h3>{authData?.name} is logged in successfully</h3>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Dashboard;
