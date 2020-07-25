import React from "react";

const Input = ({ name, label, type, value, onChange, onClick }) => {
    return (
        <>
            <div className="m-2 form-group" style={{ display: "flex" }}>
                <label htmlFor={name} className="m-1">
                    {label}
                </label>
                <input
                    id={name}
                    className="form-control"
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
                <button
                    className="mx-1 btn btn-primary"
                    onClick={onClick}
                    style={{ justifyContent: "center" }}
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default Input;
