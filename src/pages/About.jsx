import React from "react";
import { AboutBase } from "./AboutBase";

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

export function OurBuilding() {
  return (
    <>
      <div className="outBuilding">
        <div className="building">
          <h1>
            <strong>Our Building</strong>
          </h1>
        </div>
        <div className="headingBuilding">
          <div className="imageText">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/80/38/51/1000_F_280385109_ItHVESLVMvhE4gNcxMZ1Dou4F6tcs6n1.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              iste nisi error nesciunt maxime explicabo neque repellendus
              corrupti dolore incidunt provident quasi aliquam blanditiis rerum
              sed! Sed, rem autem. Facilis inventore neque omnis illum
              molestiae, odit consequatur fuga totam unde enim dolorem expedita
              magni rem deleniti veniam laudantium hic voluptatibus itaque,
              consequuntur libero beatae, exercitationem quia numquam ea! Magnam
              enim dignissimos placeat architecto laborum accusamus autem
              doloremque asperiores laudantium commodi? Lorem ipsum dolor sit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function AboutFooter() {
  return (
    <>
      <div className="aboutFooter">
        {/* <div className="fHeading"></div>
    <div className="socialMediaImage"></div>
    <div className="text"></div> */}

        <h1>Contact US</h1>
        <div className="sImages">
          <img
            src="https://thumbs.dreamstime.com/b/tik-tok-facebook-twitter-instagram-youtube-collection-popular-social-media-logo-isolated-transparent-background-196205520.jpg"
            alt=""
            className="contactSocialImage"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            minus ullam mollitia voluptatem nam suscipit cupiditate magnam ipsam
            tenetur doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            minus ullam mollitia voluptatem nam suscipit cupiditate magnam ipsam
            tenetur doloribus.
          </p>
        </div>
      </div>
    </>
  );
}
export function AboutLastFooter() {
  return (
    <>
      <div className="lastFooter">
        <h3 className="text-center">copywrite@2023</h3>
      </div>
    </>
  );
}
