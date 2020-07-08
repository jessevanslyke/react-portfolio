import React from "react";
import Project from "../Projects"
import burgerApp from "../../assets/burger-app.PNG";

function Portfolio(props) {
  return (
    <div className="container">
            <h4 className="display-8">Portfolio</h4>
            <hr className="my-4" />
                <div className="card-deck">
                    <Project name="burger-app" title="Burger App" githubRepo="https://github.com/jessevanslyke/burger" deployedSrc="https://pure-atoll-35245.herokuapp.com/" imgFile={burgerApp} />
                    <Project name="day-planner-app" title="Day-Planner App" githubRepo="https://github.com/jessevanslyke/day-planner" deployedSrc="https://jessevanslyke.github.io/day-planner/" imgFile="http://placehold.jp/150x150.png" />
                    <Project name="employee-tracker-app" title="Employee Tracker App" githubRepo="https://github.com/jessevanslyke/employee-tracker" deployedSrc="https://pure-atoll-35245.herokuapp.com/" imgFile="http://placehold.jp/150x150.png" />
                    <Project name="js-code-quiz-app" title="JS Code Quiz App" githubRepo="https://github.com/jessevanslyke/js-code-quiz" deployedSrc="https://pure-atoll-35245.herokuapp.com/" imgFile="http://placehold.jp/150x150.png" />
                    <Project name="random-password-generator-app" title="Random Password Generator App" githubRepo="https://github.com/jessevanslyke/random-password-generator" deployedSrc="https://pure-atoll-35245.herokuapp.com/" imgFile="http://placehold.jp/150x150.png" />
                    <Project name="weather-app" title="Weather App" githubRepo="https://github.com/jessevanslyke/weather-app" deployedSrc="https://pure-atoll-35245.herokuapp.com/" imgFile="http://placehold.jp/150x150.png" />
                </div>
    </div>
  );
}

export default Portfolio;
