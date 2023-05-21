import { AboutLastFooter, AboutFooter } from "./About";
const Contact = () => {
  return (
    <>
      <h1 className="text-center fw-bold">
        Call us at 718-402-3300 or fill out the form below.
      </h1>
      <div class="contact-form fContainer">
        <form action="https://formspree.io/f/mrgvkpow" method="POST">
          <label>
            Name:
            <input
              type="text"
              placeholder="Write Your Name"
              class="name"
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              class="email"
              placeholder="Write Your email"
              autocomplete="on"
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="tarea">
            Message:
            <textarea
              placeholder="Write Your Message"
              class="text-area"
              name="message"
              rows="2"
              cols="27"
              autocomplete="on"
              required
              id="tarea"
            ></textarea>
          </label>
          <button type="submit" class="send btn btn-primary text-white btn-lg">
            Send
          </button>
        </form>
      </div>
      {/* end of form  */}

      <div className="mapContainer">
        <div className="mapText">
          <h2>Getting Here</h2>
          <p>
            There are many ways to get to The Bronx Charter School for Children,
            which is located in the Mott Haven neighborhood of the South Bronx.
            Our elementary school (grades K-5) is located at 388 Willis Avenue
            (at the corner of 144th Street). Our middle school (grades 6-7) is
            located at 423 East 138th Street.
          </p>
          <h3>Student Transportation Options</h3>
          <p>
            New families receive information in the spring and summer about
            transportation options, which include student Metrocards or free
            yellow bus service for those who meet eligibility requirements.
          </p>
          <h3>Public Transportation</h3>
          <p>
            For those taking public transportation, The Bronx Charter School is
            within walking distance of many subway lines, including the 6 (3rd
            Avenue/138th Street) and the 2/5 (3rd Avenue/149th Street). The Bx15
            bus passes directly in front of the elementary school.
          </p>
          <h3>By Car</h3>
          <p>
            The school is also accessible by car off the 3rd Avenue/Willis
            Avenue Bridge or the East 138th Street/Madison Avenue Bridge. Street
            parking and parking lots are available in the area.
          </p>
        </div>
        <div className="map">
          {/* <h2>Map came Here</h2> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27331.317306564946!2d83.0478278483233!3d24.12515802078723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ed1b1c6f22751%3A0xd2c37ac12709b2a9!2sMuirpur%2C%20Uttar%20Pradesh%20231208!5e0!3m2!1sen!2sin!4v1684668529910!5m2!1sen!2sin"
            width="600"
            height="500"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <AboutFooter />
      <AboutLastFooter />
    </>
  );
};

export default Contact;
