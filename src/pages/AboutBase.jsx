import { OurBuilding, CoreValues } from "./About";
export const AboutBase = () => {
  return (
    <>
      <div className="img">
        <img
          src="https://images.pexels.com/photos/8422135/pexels-photo-8422135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="mission">
          <h1>Our Mission</h1>

          <p>
            We are a group of students from the University of Michigan. We are a
            group of students from the University of Michigan. <br />
            &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            We are a group of students from the University of Michigan. We are a
          </p>
        </div>
      </div>
      <div className="upperCore">
        <h1>
          <strong>Core Value</strong>
        </h1>
        <div className="coreValues">
          <div className="insideCore">
            <CoreValues
              image="https://tbcsc.org/get/files/image/galleries/iconmonstr-school-13-64.png?64x64"
              heading="Fostering Academic Excellence-1"
              desc="By supporting skilled and dedicated teachers who maintain high academic standards, motivate our students and collaborate with our families"
            />
          </div>
          <div className="insideCore">
            <CoreValues
              image="https://tbcsc.org/get/files/image/galleries/iconmonstr-school-9-64.png?64x64"
              heading="Fostering Academic Excellence-2"
              desc="2-By supporting skilled and dedicated teachers who maintain high academic standards, motivate our students and collaborate with our families"
            />
          </div>
          <div className="insideCore">
            <CoreValues
              image="https://tbcsc.org/get/files/image/galleries/iconmonstr-lock-4-64.png?64x64"
              heading="Fostering Academic Excellence-3"
              desc="By supporting skilled and dedicated teachers who maintain high academic standards, motivate our students and collaborate with our families"
            />
          </div>
          <div className="insideCore">
            <CoreValues
              image="https://tbcsc.org/get/files/image/galleries/iconmonstr-idea-10-64.png?64x64"
              heading="Fostering Academic Excellence-4"
              desc="By supporting skilled and dedicated teachers who maintain high academic standards, motivate our students and collaborate with our families"
            />
          </div>
          <div className="insideCore">
            <CoreValues
              image="https://tbcsc.org/get/files/image/galleries/iconmonstr-handshake-8-64.png?64x64"
              heading="Fostering Academic Excellence-5"
              desc="By supporting skilled and dedicated teachers who maintain high academic standards, motivate our students and collaborate with our families"
            />
          </div>
        </div>
      </div>
      <OurBuilding />
    </>
  );
};
