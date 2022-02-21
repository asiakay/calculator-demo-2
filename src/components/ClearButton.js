import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const ClearButton = () => {
    const { handleClearValue } = useContext(NumberContext);
    return (
        <div id="clear">
        <button type="button" className="white-button" onClick={() => handleClearValue()}>
           C</button>
           </div>
    );
};

export default ClearButton;