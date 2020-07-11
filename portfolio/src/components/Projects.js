import React from "react";
import "../styles/styles.css"

function Project(props) {
    return(
        <div className="card text-white mb-3">
            <img className="card-img-top photo" src={props.imgFile} alt={props.name} />
            <div className="card-body text-center">
                <p className="card-title text-center">{props.title}</p>
                <a className="btn-sm btn-primary justify-content-center" href={props.githubRepo}>&nbsp;Github Repo&nbsp;&nbsp;</a><br />
                <a className="btn-sm btn-secondary" href={props.deployedSrc}>Deployed App</a>
            </div>
        </div>
        //<Project name="burger-app" title="Burger App" src="https://pure-atoll-35245.herokuapp.com/" imgFile="placeholder" />
    );
}

export default Project;
