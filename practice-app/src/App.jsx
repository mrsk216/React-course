import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    term: '',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [term, setTerm] = useState('');
  
  function handleFormData(e) {
    e.preventDefault();
    
    setFormData({
      name: name,
      email: email,
      password: password,
      term: term
    });
  }
  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleFormData}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name='email'  onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password'  onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="checkbox" name="term"  onChange={e => setTerm(e.target.value)}/>
          <label htmlFor="term">I agree with term and conditions</label>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <h1>Registered User Info</h1>

      {formData.name != '' ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Term</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ formData.name }</td>
              <td>{formData.email}</td>
              <td>{formData.password}</td>
              <td>{formData.term == 'on' ? 'Agree' : ''}</td>
            </tr>
          </tbody>
        </table>
      ) : ''}
      
    </>
  )
}

export default App
