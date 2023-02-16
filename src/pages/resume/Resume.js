import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div>
      <div className="card justify-content-center align-items-center skills">
        <h1>Skills</h1>
        <p>
        AJAX, Bootstrap, Bulma, CSS, Express, Git, GitHub, Handlebars, HTML, JavaScript, JQuery, JSON, MongoDB, Mongoose, MySQL, Node.js, React, Sequelize
        </p>
        <p>
          Verbal and Written Communication, Creative Problem Solving, Management/Leadership, Organization, Teamwork, Scrum and Agile Methodologies
        </p>
      </div>
      <div>
        <a className="download-btn" href="../mvResume.pdf" download>
          Download Resume
        </a>
      </div>
    </div>
  );
}
