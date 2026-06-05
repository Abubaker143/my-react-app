function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1>
          India’s #1 <br /> Ride-hailing App wellcome
        </h1>

        <p>Quick, Affordable rides at your doorstep</p>

        <input type="text" placeholder="Enter Pickup Location" />
        <input type="text" placeholder="Enter Drop Location" />

        <button className="book">Book Ride</button>
      </div>

      <div className="right">
        <img
          src="https://content-cus.rapido.bike/image/banner_image_new.png"
          alt="rapido"
        />
      </div>
    </div>
    













  );
}

export default Hero;