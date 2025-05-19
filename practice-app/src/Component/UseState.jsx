import { useState } from "react";

const UseStatePractice = () => {
    const [number, setNumber] = useState(0);
    const handleIncreasement = () => {
        setNumber(number + 1);
        console.log('inside of event',number);
    }
    console.log('outside of event',number);
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 m-5'>
            <h1>{number}</h1>
            <button type='button' className='btn btn-info' onClick={handleIncreasement}>Increase</button>
        </div>
    );
}

export default UseStatePractice;