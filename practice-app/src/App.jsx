import { useState, useEffect, useRef } from "react";

function App() {
  // const pageTitle = useRef(0);

  // useEffect(() => {
  //   console.log(pageTitle.current);
  //   pageTitle.current.style.color = 'red';
  // });

  const [input, setInput] = useState('');
  const num = useRef(0);

  useEffect(() => {
    num.current = num.current + 1;
  });

  return (
    <>
      <h6>useRef Practice</h6>
      <input type="text" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} maxLength={10}/>
      <small className="text-danger">{num.current > 10 ? 'Maximum text is 10' : num.current < 5 ? 'Minimum text is 5' : ''}</small>
    </>
  );
}

export default App