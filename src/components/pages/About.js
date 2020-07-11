import React from "react";
import Me from "../../assets/Me.jpg";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={Me} alt="Jesse VanSlyke"/>
      <p>
        Hi! My name is Jesse VanSlyke, and I'm a software developer student at the UNC (University of North Charlotte) bootcamp. In my spare time, I love to swim, code, and game on mobile/PC platforms.
        <br />
        I have over 5 years of professional experience in the IT sphere of the Financial Services industry, with half of it in Systems Administration and the other half in C# Application Development.
      </p>
    </div>
  );
}

export default About;