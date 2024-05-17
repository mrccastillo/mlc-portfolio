import "../Styles/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h2 className="testimonial-header">TESTIMONIALS</h2>
      <p className="project-description testimonial-description">
        Discover the experiences and success stories from our valued clients.
        Their testimonials reflect the positive impact our services have had on
        their personal and professional lives. Join the many satisfied customers
        who have transformed their outcomes with us.
      </p>
      <div className="testimonial-container">
        <h2 className="testimonial-subheader">WHAT MY CLIENTS SAY</h2>
        <div className="testimonial">
          <div className="testimonial-photo"></div>
          <div className="testimonial-info">
            <h4>Juan Dela Cruz</h4>
            <p className="project-contributor">Student</p>
            <p className="project-description">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              provident veniam, atque earum, eius veritatis quaerat iusto fuga
              quia repudiandae natus exercitationem, ex similique mollitia culpa
              quos. Quisquam, maxime vero."
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-photo"></div>
          <div className="testimonial-info">
            <h4>Juan Dela Cruz</h4>
            <p className="project-contributor">Student</p>
            <p className="project-description">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              provident veniam, atque earum, eius veritatis quaerat iusto fuga
              quia repudiandae natus exercitationem, ex similique mollitia culpa
              quos. Quisquam, maxime vero."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
