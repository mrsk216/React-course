import {BrowserRouter, Routes, Route, Navigate} from 'react-router'
import Header from './Header';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import SingleBlog from './SingleBlog';
import Error from './Error';

function App() {
  const admin = 'Arif Hosain';
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name={admin} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:category" element={<SingleBlog />} />
        <Route path='/sk'>
          <Navigate to="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App