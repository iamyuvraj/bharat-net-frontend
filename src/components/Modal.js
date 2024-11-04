import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  // prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = ""); // cleanup when modal closes
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* full-screen overlay with blur and darker background */}
      <div
        className="fixed inset-0 bg-black opacity-70 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* modal container */}
      <div className="relative z-10 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-lg mx-auto h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-2xl">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
