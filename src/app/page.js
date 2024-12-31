export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our Simple Website</h1>
          <p>
            We're here to provide you with the best services. Explore our
            website to find out more!
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/h.jpg" />
        </div>
      </section>

      {/* Services Section */}
      <div className="services-container">
        <h1>Welcome to Our Services</h1>

        <div className="services-row">
          <div className="service-box">
            <h2>Service 1</h2>
            <p>Service 1 description goes here.</p>
          </div>
          <div className="service-box">
            <h2>Service 2</h2>
            <p>Service 2 description goes here.</p>
          </div>
          <div className="service-box">
            <h2>Service 3</h2>
            <p>Service 3 description goes here.</p>
          </div>
        </div>
        <section className="hero-section">
          <div className="hero-text">
            <h1>Our Story</h1>
            <div className="para">
              <p>
                Welcome to Simple Website, where innovation meets simplicity. In
                today’s fast-paced digital world, we understand the importance
                of providing our users with a platform that not only meets their
                needs but exceeds their expectations. Our website is designed
                with one goal in mind: to make your online experience as
                seamless and enjoyable as possible. Whether you're an individual
                seeking the best solutions to enhance your personal projects, a
                business looking for professional-grade services, or someone
                simply exploring new possibilities, we are here to cater to your
                every need.
                <br />
                <br />
                Our team of dedicated professionals works around the clock to
                ensure that every aspect of your experience is smooth,
                efficient, and stress-free. From the moment you land on our
                homepage to the time you reach your desired destination on our
                site, you’ll find that every step has been carefully crafted for
                your convenience. We use cutting-edge technologies, innovative
                design principles, and a user-centric approach to create a
                website that is not only functional but also delightful to
                navigate.
                <br />
              </p>
            </div>
          </div>
          <div className="hero-image-se">
            <img src="/images/h.jpg" alt="Hero Image" />
          </div>
        </section>
      </div>
    </>
  );
}
