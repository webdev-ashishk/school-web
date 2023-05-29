import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const Cart = ({ image, name }) => {
  return (
    <>
      {/* <h1>Cart</h1> */}
      <div className="cartOne">
        <img src={image} alt="" className="inside-image" />
        <h1>{name}</h1>
      </div>
    </>
  );
};

const HomeAfter = () => {
  return (
    <>
      {/* <h1>Home After</h1> */}
      <div className="cart-container">
        <Cart
          image="https://thumbs.dreamstime.com/b/enrollment-icon-enrollment-nomination-150860740.jpg"
          name="Enroll"
        />
        <Cart
          image="https://thumbs.dreamstime.com/b/teacher-chalkboard-icon-white-background-teacher-chalkboard-icon-145987774.jpg"
          name="Teacher"
        />
        <Cart
          image="https://thumbs.dreamstime.com/b/support-icon-vector-isolated-white-background-support-transparent-sign-black-symbols-support-icon-vector-isolated-white-134578573.jpg"
          name="Support"
        />
        <Cart
          image="https://png.pngtree.com/template/20191024/ourmid/pngtree-flower-pot-and-plant-logo-growth-vector-logo-image_322946.jpg"
          name="Grow"
        />
      </div>
    </>
  );
};

// main function
export default function Home() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active imageDiv"
            data-bs-interval="10000"
          >
            <img
              src="https://tbcsc.org/files/_cache/54a17279bb49cca2a3c91c5aec4a80b7.jpg"
              alt="..."
              className="image"
            />
            <div className="carousel-caption d-none d-md-block insideImageText">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button type="button" class="btn btn-info btnHover">
                ReadMore
              </button>
            </div>
          </div>
          <div className="carousel-item imageDiv" data-bs-interval="1000">
            <img
              src="https://tbcsc.org/files/_cache/7ba268ee73650e4b984c5541128bb4c2.jpg"
              className="d-block image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block insideImageText">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <button type="button" class="btn btn-info btnHover">
                ReadMore
              </button>
            </div>
          </div>
          <div className="carousel-item imageDiv">
            <img
              src="https://tbcsc.org/files/_cache/e04ec5fb206073a5056c2bf2637e2cd7.jpg"
              className="d-block  image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block insideImageText">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <button type="button" class="btn btn-info btnHover">
                ReadMore
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* footer  */}
      <div className="welcome-container">
        <div className="welcome">
          <h1 className="wcome">Welcome to</h1>

          <h1>
            <strong>The Brown Charter school for Children</strong>
          </h1>
          <em>
            The Mission of The Bronx Charter School for Children is to empower
            our children to achieve their
          </em>
          <em>
            greatest potential both as students and as members of their
            communities.
          </em>
        </div>
        <HomeAfter />
      </div>
    </>
  );
}
