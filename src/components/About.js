import React, { useState } from "react";

export default function About() {
  let [selected, setSelected] = useState("");

  return (
    <>
      <div id="about">
        <div className="a-body">
          <div className="row">
            <div className="about-col-1">
              <img
                src={
                  new URL(
                    "https://media4.giphy.com/media/dsPBfiEEozyXUXShhB/giphy.webp?cid=ecf05e47c98soea6y7empv2otjb4q2596x4fdlnej2dkibah&ep=v1_gifs_search&rid=giphy.webp&ct=g"
                  )
                }
                alt="rthtrydyryddututu"
              />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                HEY THERE! I AM HARDIK SAHU NICE TO MEET YOU. TODAY WANT TO
                INTRODUCE MYSELF. AS YOU KNOW I AM A 15YEARS OLD BOY AND MY HOME
                TOWN IS IN RAJASTHAN BUT CURRENTLY I LIVE IN DELHI WITH MY
                FAMILY. THERE ARE 6 MEMEBERS IN MY FAMILY.I STUDY IN 8TH
                STANDARD AND MY SCHOOL NAME IS SHIKHA DEEP VIDYALAYA.I ALSO PLAY
                BASEBALL.I HAVE LOTS OF FRIENDS.IF YOU WANT TO KNOW ABOUT MY
                SKILLS, EDUCATION AND EXPERIENCE.
                <b> PLEASE CLICK👇👇😎</b> ON THESE SECTIONS
                <span className="col">!!HAVE A NICE DAY!!</span>
              </p>
              <div className="tab-titles">
                <p
                  className="tab-links"
                  onClick={() => {
                    setSelected("skills");
                  }}
                >
                  Skills
                </p>
                <p
                  className="tab-links"
                  onClick={() => {
                    setSelected("experience");
                  }}
                >
                  Experience
                </p>
                <p
                  className="tab-links"
                  onClick={() => {
                    setSelected("education");
                  }}
                >
                  Education
                </p>
              </div>
              <div
                className={`tab-contents ${
                  selected === "skills" && "active-tab"
                }`}
              >
                <li>
                  <span>Web Development</span>
                  <br /> Designing Web
                </li>
              </div>
              <div
                className={`tab-contents ${
                  selected === "experience" && "active-tab"
                }`}
              >
                <li>
                  <span>learning Languages</span>
                  <br /> 3 Years
                </li>
              </div>
              <div
                className={`tab-contents ${
                  selected === "education" && "active-tab"
                }`}
              >
                <li>
                  <span>My Knowledge</span>
                  <br />I am still learning!
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
