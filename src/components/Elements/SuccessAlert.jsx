import React from "react";

const successAlert = ({ message, onClose }) => (
    <div className="borderp-4 mb-4 text-green-800  bg-green-200 px-16 text-center items-center py-5 rounded relative" role="alert">
        <strong className="font-bold">Success: </strong>
        <span className="block sm:inline">{message}</span>
        <button onClick={onClose} className="absolute top-0 bottom-0 right-0 px-4 flex items-center">
            <svg className="fill-current h-6 w-6 text-green-800" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a.75.75 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
        </button>
    </div>
);

export default successAlert;
