// import UseStatePractice from "./Component/UseState";
// import UseEffectPractice from "./Component/UseEffect";
import { useState } from "react";
import Card from './Component/Card'
import { counter } from "./Context/counterContext";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      {/* <UseStatePractice /> */}
      {/* <UseEffectPractice /> */}
      <div className="wrapper">
        <counter.Provider value={number}>
          <Card />
        </counter.Provider>
        
        <div className="d-flex gap-3 mt-3">
          <button className="btn btn-secondary" onClick={() => setNumber(number + 1)}>Increase</button>
          <button className="btn btn-secondary" onClick={() => setNumber(number -1)}>Decrease</button>
        </div>
      </div>
    </>
  );
}

export default App