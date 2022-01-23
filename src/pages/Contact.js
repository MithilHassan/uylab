import { Section, StyledContact } from "../components/Styles/Styles";
import phone from "../components/img/call.png";
import mail from "../components/img/mail.png";
import earth from "../components/img/earth.png";
import skype from "../components/img/skype.png";
import location from "../components/img/location.png";
import nilima from "../components/img/Nusrat-Jahan-Nilima.jpg";
import Alamin from "../components/img/Mohammad-Al-Amin.jpg";
const Contact = () => {
  return (
    <Section>
      <StyledContact>
        <div className="row">
          <h2>
            CONTACT US TODAY ! <br /> Thank You For Visiting Our Website
          </h2>
          <div className="col">
            <div className="flex">
              <img height="40px" src={location} alt="icon" />
              <span>Postal Address:</span>
            </div>
            <p style={{ marginLeft: "100px" }}>
              11 Bir Uttam AK Khandakar Road, 31 Mohakhali Commercial Area,
              Colombia Super Market, 4th Floor, Wireless Gate, 1213
            </p>
          </div>
          <div className="col flexbox">
            <div className="flex">
              <img height="40px" src={phone} alt="icon" />
              <span>
                Phone:
                <p>01783-838382</p>
                <p>01906-600015</p>
              </span>
            </div>
            <div className="flex">
              <img height="40px" src={skype} alt="icon" />
              <span>
                Skype:
                <p>uylabtraining</p>
                <p>uy_lab</p>
              </span>
            </div>
          </div>
          <div className="col flexbox">
            <div className="flex">
              <img height="40px" src={mail} alt="icon" />
              <span>
                Email:
                <p>contact@uylab.org</p>
              </span>
            </div>
            <div className="flex">
              <img height="40px" src={earth} alt="icon" />
              <span>
                Web:
                <p>www.uylab.org</p>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <h2>Location Info:</h2>
          <div>
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0604794318992!2d90.40305171442662!3d23.780860584574373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c773d4c51555%3A0xc64f334b35dcc70d!2sUY%20LAB!5e0!3m2!1sen!2sbd!4v1609163477657!5m2!1sen!2sbd"
              width="100%"
              height="266"
              frameborder="0"
              style={{ border: "0px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              data-rocket-lazyload="fitvidscompatible"
              class="lazyloaded"
              data-ll-status="loaded"
            ></iframe>
          </div>
        </div>
        <div className="Contact_Form">
          <div className="col">
            <h2>Feedback:</h2>
            <form action="">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <textarea name="feedback" rows="12"></textarea>
              <button>SUBMIT</button>
            </form>
          </div>
          <div className="col">
            <h2>Your Contact</h2>
            <div className="contact">
              <div className="flex">
                <img src={nilima} alt="img" />
                <div>
                  <span>Nusrat Jahan Nilima</span>
                  <p className="authority">Head of communications</p>
                  <p>
                    Phone: 01783-838382 <br /> Email: nilima@uylab.org <br />{" "}
                    Skype: uylab_nilima
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src={Alamin} alt="img" />
                <div>
                  <span>Al Amin</span>
                  <p className="authority">Student Relationship Manager</p>
                  <p>
                    Phone: 01789648109 <br /> Email: alamin@uylab.org <br />
                    Skype: uylab_alamin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContact>
    </Section>
  );
};
export default Contact;
