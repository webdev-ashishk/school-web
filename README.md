# school-web
school webiste


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