import React from 'react';
import {Route, Link} from 'react-router-dom';

function AboutHistory(props){
    return(
        <div>
            <p> The Clippers used to be a San Diego team</p>
        </div>
    )
}

function AboutTeam(props){
    return (
        <div>
            <p> The Clippers are pretty great </p>
        </div>
    )
}
export default function About(props){
return (
    <div>
        <h1>About</h1>
        <div>
            <Link to="/about/history">History</Link>
            <Link to="/about/team">Team</Link>
        </div>
        <Route path="/about/history" component={AboutHistory} />
        <Route path="/about/team" component={AboutTeam} />
    </div>
    )
}