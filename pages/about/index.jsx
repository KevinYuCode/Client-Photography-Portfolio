import React from "react";
import MarginContainer from "../../components/MarginContainer";
import Header from "../../components/Header";
import { PROFILE_PHOTO } from "../../assets/assets";
function About() {
  return (
    <>
      <Header />
      <MarginContainer>
        <div className="about-container">
          <div className="about-info">
            <h1>Johnny Wong</h1>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dicta neque dolores? Dolorum
              doloribus nesciunt laudantium enim libero non voluptates facere omnis atque a eaque sint, optio
              suscipit aspernatur vitae?
            </h3>
          </div>
          <div className="about-profile-photo">
            <img src={PROFILE_PHOTO.src} alt="Profile Photo" />
          </div>
        </div>
      </MarginContainer>
    </>
  );
}

export default About;
