import { useState, useCallback, useMemo } from "react";
import Counter from "./Counter";
import Button from "./Button";

function App() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const handleCount1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const handleCount2 = useCallback(() => {
    setCount2((prev) => prev * 2);
  }, []);
  
  const check = useMemo(() => {
    for (let index = 0; index < 100000; index++) {
      console.log(index);
    } 
    return 'All checked';
  },[]);
  return (
    <>
      <div className="text-center">
        <h1 className="mb-5">useCallback & useMemo Practice</h1>    
        
        <Counter count={`Count1 value is ${count1}`} />
        <Button action={handleCount1} name="Increment Count1" />
        <hr />
        <Counter count={`Count2 value is ${count2}`} />
        <Button action={handleCount2} name="Increment Count2"/>
      </div>
      <div className="alert alert-success text-center mt-5">{ check }</div>
    </>
  );
}

export default App