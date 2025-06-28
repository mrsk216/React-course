import useFetch from './Hooks/useFetch'
import { Link } from "react-router";

const Blog = () => {
    const data = useFetch("https://dummyjson.com/posts");
    return (
      <>
        <div className="d-flex gap-3">
          <h1>Fetching Api</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/posts"}>Post</Link>
        </div>

        <div className="container">
          <div className="row">
            {data.posts?.map((post) => (
              <div className="col-4" key={post.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-primary-emphasis">
                      {post.title}
                    </h5>
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Blog