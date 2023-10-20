export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            With over 11 years of experience in aeronautical engineering and mechanical design, I've specialized in managing end-to-end engineering projects in the medical device field. My skills range from converting magnetic designs into CAD models using Python, Rhino3D, and Grasshopper, to detailed mechanical design in PTC Creo.
          </p>
          <p className="hero--section-description">
            I'm not just about the technical aspects; my role extends to sourcing materials, managing suppliers, and conducting verification tests. Passionate about innovation, I'm committed to pushing the boundaries in my field and delivering high-quality, impactful work.
          </p>
        </div>
      </div>
    </section>
  );
}
