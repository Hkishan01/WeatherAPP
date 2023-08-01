import React from "react";
import Home from "./Home";

const Back = () => {
  return (
    <>
      <div
        className="back"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1200224188/photo/white-clouds-and-sun-in-blue-sky.jpg?s=612x612&w=0&k=20&c=_fqLmtlTODIhKV_5nNJm8lcMiVEZUmxTfHZERvP1HkE=")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <Home />
      </div>
    </>
  );
};

export default Back;
