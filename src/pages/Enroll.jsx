import React from "react";
import { Form } from "react-router-dom";
import { AboutFooter, AboutLastFooter } from "./About";

const EnrollComponent = () => {
  return (
    <>
      <div className="girlWithText">
        <div className="girl">
          <img
            className="girlImg"
            src="https://tbcsc.org/files/_cache/b99378614ddf428b39dd618123881228.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <h1>TBCSC's 2022-2023 Charter School Lottery</h1>
          <p>
            <em> Applications for K-8 for the 2022-2023 </em>
            school year are being accepted now. In order for your child to be
            included in the TBCSC lottery, you must submit a 2022-2023 Lottery
            Application Form by April 1, 2022. Legal parents or guardians may
            complete the online common charter school application.
          </p>
          <p> Paper application forms can be obtained from the BCSC Office.</p>
          <br />
          <p>
            Faxed applications will not be accepted. All applications submitted
            after the deadline are added to the waitlist in the order they are
            received by the TBCSC Office. To apply for kindergarten, a child
            must turn 5 years old by December 31st of the enrollment year
          </p>
          <p>
            The Bronx Charter School for Children will conduct a computerized
            lottery randomization via Zoom witnessed by an independent auditor.
          </p>
          <br />
          <p>
            The Bronx Charter School for Children does not discriminate on the
            basis of race, national and ethnic origin, religion, sexual
            orientation, or disability in the administration of its educational,
            admission, scholarship, or employment policies, or any other
            programs administered by the School.
          </p>
        </div>
      </div>
    </>
  );
};

export const Enroll = () => {
  return (
    <>
      <div className="enroll-banner-wrapper">
        <div className="inside-enroll" id="insideEnroll">
          <h2 className="fw-bold display-1">Enroll</h2>
        </div>
      </div>
      <div className="textContainer">
        <div className="text">
          <h1>Apply Today! </h1>
          <p>
            We are now accepting applications for grades K-8 for the 2023-2024
            school year. Complete the online common charter school application
            OR apply in person at 388 Willis Avenue (corner of 144th Street).
            Our office is open Monday-Friday between 9:00 am - 2:00 pm.
          </p>
          <h1>How TBCSC's Lottery Works</h1>
          <p>
            A public charter school lottery determines the order in which
            students are granted admission into TBCSC. Once all available spaces
            are filled, names are drawn to determine the order of the waitlist.
            Students will be admitted from the waitlist as spaces become
            available in each grade. Preference is given to siblings of enrolled
            and admitted students and to students residing in NYC Community
            School District 7. TBCSC has set-aside seats for: 1) Students with
            Disabilities/Special Needs and 2) Students that qualify for the
            Federal Free/Reduced Lunch Program or receive SNAP/TANF Benefits.
            The questions in our lottery application pertaining to these
            set-asides are optional; however, we urge you to answer them so that
            we may determine your eligibility for these set-aside seats. Please
            know that if your child is offered a seat, you will be asked to
            provide documentation to demonstrate your eligibility for these
            set-asides.
          </p>
        </div>

        <div className="image-left">
          <img
            className="div-image"
            src="https://thumbs.dreamstime.com/b/dad-hugs-child-front-kindergarten-school-beginning-year-parting-parents-caring-children-love-226697721.jpg"
            alt=""
          />
        </div>
      </div>
      <EnrollComponent />
      <AboutFooter />
      <AboutLastFooter />
    </>
  );
};
