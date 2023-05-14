import React from "react";
import { AboutBase } from "./AboutBase";

export function About({ fname, lname }) {
  return (
    <>
      <div className="container">
        <h1>{fname}</h1>
        <h1>
          <strong>{lname}</strong>
        </h1>
      </div>
    </>
  );
}

export function CoreValues({ image, heading, desc }) {
  return (
    <>
      {/* <div className="upperCore"> */}
      <div className="coreValues">
        <div className="coreImage">
          <img src={image} alt="" />
        </div>
        <div className="coreDetail">
          <h1>{heading}</h1>
          <p>{desc}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
