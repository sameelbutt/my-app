export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
