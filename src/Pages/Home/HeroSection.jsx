export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Wout</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Senior</span>{" "}
            <br />
            Mechanical Engineer
          </h1>
          <p className="hero--section-description">
            Over a decade in aeronautical engineering and mechanical design.
            <br /> Specialized in medical device development and end-to-end project management.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
