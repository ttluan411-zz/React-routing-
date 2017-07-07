import React from 'react';
import {getRoster, getPlayer} from './rosterService';
import {Route, Link} from 'react-router-dom';

export function Player(props){
    const player = getPlayer(props.match.params.player_id)
    return(
        <div>
            <img src={player.image} />
            <h1>{player.name}</h1>
        </div>
    )
}
function Squad(props){
    const players = getRoster().map((player,i)=>(
        <div key={i}>
            <Link to={'/roster/' + player.id}>
            {player.name}
            </Link>
        </div>
    ))
     return(
        <div>
            {players}
        </div>
    )   
}
export default function Roster(props) {
    console.log(props);
    return(
        <div>
            <h1> Team Roster</h1>
            {props.match.isExact ?
            <Squad /> :
            <Route path="/Roster/:player_id" component={Player} />
            }
        </div>
    )
}
