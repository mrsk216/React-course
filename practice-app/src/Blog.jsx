import {Link} from 'react-router'
function Blog() {
  
    return (
      <>
            <h1>Blog Page</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/blog/development">Development</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/blog/design" >Design</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
  }
  
  export default Blog