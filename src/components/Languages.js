import React from "react";

export default function Languages() {
  return (
    <>
      <h1 className="L-top">Languages, I Learn! </h1>
      <div className="L-body">
        <p>
          <h1 className="head3">Html</h1>
          <span className="bar">
            <span className="Html"></span>
          </span>
        </p>
        <p>
          <h1 className="head3">Css</h1>
          <span className="bar">
            <span className="Css"></span>
          </span>
        </p>
        <p>
          <h1 className="head3">Javascript</h1>
          <span className="bar">
            <span className="Javascript"></span>
          </span>
        </p>
      </div>
      <div className="work">
        <h1 className="cont">My Work</h1>
        <div className="work-list">
          <div className="workimg">
            <img
              src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="niaung"
            />
            <div className="layer">
              <h3>Notes WebApp</h3>
              <p>
                I BUILT THE ''NOTES WEBAPP''. THIS WEBAPP PROVIDES YOU TO WRITE
                DOWN YOUR IMPORTANT NOTES.{" "}
              </p>
            </div>
          </div>
          <div className="workimg">
            <img
              src="https://media.gettyimages.com/id/168678735/photo/metal-tic-tac-toe-game-pieces.jpg?s=612x612&w=0&k=20&c=PaH_PC31eSkyRSNwIGTbHo8_2rRBMeB-wO411SQao0E="
              alt="niaung"
            />
            <div className="layer">
              <h3>TIC-TAC-TOE WEBAPP</h3>
              <p>
                TIC-TAC-TOE IS GAME. THIS GAME SHARP YOUR MIND AND MAKE YOU FELL
                HAPPY.
              </p>
            </div>
          </div>
          <div className="workimg">
            <img
              src="https://wallpapercave.com/wp/wp11410954.jpg"
              alt="niaung"
            />
            <div className="layer">
              <h3>HELICOPTER</h3>
              <p>
                HELICOPTER GAME THAT WAS BUILT BY MYSELF IS VERY INTERSTING
                GAME. I THINK YOU SHOULD TRY ONCE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
