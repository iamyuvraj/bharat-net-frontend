import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-60" onClick={onClose}></div>
      
      {/* Modal container with a transparent background and blur effect */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-lg h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
