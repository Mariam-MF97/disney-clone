import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>More Info</h3>
              <ul>
                <li>
                  <a href="#">Your Account</a>
                </li>
                <li>
                  <a href="#">Your Plans</a>
                </li>
                <li>
                  <a href="#">Your Discounts</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Disney+</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p class="copyright">
            Amazon Clone by Mariam M. Farouk Check my{" "}
            <a
              href="https://www.linkedin.com/in/mariamfarouk/"
              target="_blank"
              class="footer__link"
              id="linkedin"
            >
              Linkedin Profile
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/Mariam-MF97"
              target="_blank"
              class="footer__link"
              id="github"
            >
              Github Profile
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
