
import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader"></div>
      </div>

      <style>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 5px solid #e5e5e5;
          border-top: 5px solid #000;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Loader;

