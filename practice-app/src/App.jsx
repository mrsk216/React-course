import useFetch from "./Hooks/useFetch";
import { Link } from "react-router";

function App() {
  const data = useFetch("https://api.restful-api.dev/objects");

  return (
    <>
      <div className="d-flex gap-3">
        <h1>Fetching Api</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/posts"}>Post</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Colour</th>
          </tr>
        </thead>
        <tbody>
          {data && data?.map((product, i) => (
            <tr key={i}>
              <td>{product.name}</td>
              <td>{product.data?.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App