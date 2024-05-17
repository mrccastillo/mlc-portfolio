import "../Styles/Contact.css";

function Contact(props) {
  return (
    <div className="contact" id="contact">
      <div className="contact-description">
        <h2>CONTACT ME</h2>
        <p>
          Got a question, suggestion, or just want to say hello? I'd love to
          hear from you!
          <br />
          Feel free to reach out through any of the following channels:
        </p>
        <div className="social-container">
          <a
            href="https://www.facebook.com/marclowel.castillo"
            target="_blank"
            className="skill social fb"
          ></a>
          <a
            href="https://www.linkedin.com/in/marc-castillo-b5050a270/"
            target="_blank"
            className="skill social linkedin"
          ></a>
          <a
            href="https://github.com/mrccastillo"
            target="_blank"
            className="skill social github"
          ></a>
        </div>
        <div className="contact-form">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea name="" id="message"></textarea>
          </div>
          <button className="send-button">Send</button>
        </div>
      </div>
      <p className="footer-copyright">© 2024 Marc Lowel Castillo</p>
    </div>
  );
}

export default Contact;
