import { Link } from "react-router";

function Dashboard() {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <h1>Welcome to visit our dashboard</h1>
                    <h3>Mr Farid is logged in successfully</h3>
                    <button type="button" className="btn btn-danger">Logout</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
