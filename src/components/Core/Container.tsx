import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="mycontainer">{children}</div>
      <style jsx>{`
        .mycontainer {
          display: grid;
          place-items: center;
          width: 100%;
          padding-right: 60px;
          padding-left: 60px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </>
  );
};

export default Container;
