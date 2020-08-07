import React, { useState } from "react";

function useInputState(initial) {
    const [state, setState] = useState(initial);
    const handleChange = (event) => {
        setState(event.target.value);
    };
    const reset = () => {
        setState("");
    };
    return [state, handleChange, reset];
}

export default useInputState;
