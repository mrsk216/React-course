import React from "react";
const Button = ({ action, name }) => {
    console.log(`Working Action Button Name is ${name}`)
    return (
        <>
            <button onClick={action} className="btn btn-secondary">{ name }</button>
        </>
    );
}

export default React.memo(Button);