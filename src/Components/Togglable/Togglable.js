import { useState, useImperativeHandle, forwardRef } from "react";

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);

    const hideWhenVisible = { display: visible ? "none" : "" };
    const showWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility,
        };
    });

    return (
        <div className="containerTogg">
            <div style={hideWhenVisible}>
            <button
            className="ButtonConfirm"
            style={{ backgroundColor: "#047ec4" }}
            onClick={toggleVisibility}
            >
                {props.buttonLabelShow}
            </button>
        </div>
        <div style={showWhenVisible}>
            <button
            className="ButtonCancel"
            style={{ backgroundColor: "#941600" }}
            onClick={toggleVisibility}
            >
                {props.buttonLabelHide ? props.buttonLabelHide : "Cancel"}
            </button>
            {props.children}
        </div>
        </div>
    );
});

export default Togglable;