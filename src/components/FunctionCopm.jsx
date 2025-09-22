import React from "react";

const FunctionCopm = ({ message, myname, children }) => {
    return (
        <>
            <h1>{message}</h1>
            <p>Welcome {myname}</p>
            <p>{children}</p>
        </>
    );
};

export default FunctionCopm;
