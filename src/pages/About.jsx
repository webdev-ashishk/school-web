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
      <div className="coreValues">
        <img src={image} alt="" />
        <h1>{heading}</h1>
        <p>{desc}</p>
      </div>
    </>
  );
}
