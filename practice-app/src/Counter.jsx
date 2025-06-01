import React from 'react';
const Counter = ({ count }) => {
    console.log(count);
    return (
        <>
            <p className="display-6">{ count }</p>
        </>
    );
}

export default React.memo(Counter);