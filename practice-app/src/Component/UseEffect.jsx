import { useState, useEffect } from "react";

const UseEffectPractice = () => {
    // const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log('Hello')
        }, 1000)
    }, [1,2,'dfsdfs',sec]);




    return (
        <>
            <h1>{ sec }</h1>
        </>
    );
}

export default UseEffectPractice;