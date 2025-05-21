import { useContext } from "react";
import { counter } from "../Context/counterContext";
const Button = () => {
    const num = useContext(counter);
    return (
        <>
            <p className="display-3 text-center">{ num }</p>
        </>
    )
}

export default Button;