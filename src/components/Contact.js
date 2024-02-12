import React from "react";
export default function Contact() {
  return (
    <>
      <div className="act1">
        <div className="row">
          <div className="cont-left">
            <h1 className="cont-head">Contact Me</h1>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5306/5306456.png"
                alt=""
                className="bottom-img"
              />
              <span className="tx">hardiksahu2409@gmail.com</span>
            </p>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/6358/6358013.png"
                alt=""
                className="bottom-img"
              />
              <span className="tx">9315838194</span>
            </p>
            <div className="social-icons">
              <a href="https://instagram.com">
                <img
                  className="bottom-img"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384172.png"
                  alt=""
                />
              </a>
              <a href="https://messenger.com">
                <img
                  className="bottom-img"
                  src="https://cdn-icons-png.flaticon.com/128/1388/1388969.png"
                  alt=""
                />
              </a>
              <a href="https://facebook.com">
                <img
                  className="bottom-img"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384168.png"
                  alt=""
                />
              </a>
              <a href="https://linkedin.com">
                <img
                  className="bottom-img"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384171.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="cont-right">
            <form>
              <input
                type="text"
                className="form"
                name="Name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="Email"
                className="form"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                className="form"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="bottom-btn-l">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          <b>Copyright © HARDIK. Made with 💖 by me</b>
        </p>
      </div>
    </>
  );
}
