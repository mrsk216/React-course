import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      const response = await axios.get('https://api.restful-api.dev/objects');
      setProducts(response.data);
    }

    fetchingData();
  });
  const formData = [{ name: 'Akash', age: '25' }];
  const handleFormData = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      'https://api.restful-api.dev/objects',
      formData,
      {
        headers: {
          'Content-Type' : 'application/json',
        }
      }
    );

    if (response.status === 200) {
      //
    } else {
      console.error('Something is wrong')
    }
    
  }

  const handleDeleteData = async (id) => {
    const response = await axios.delete('https://api.restful-api.dev/objects/' + id);

    
  }

  return (
    <>
      <h1>Fetching Api</h1>
      <form onSubmit={handleFormData}>
        <button onClick={() => handleDeleteData(5)}>Delete</button>
      </form>
    </>
  );
}

export default App