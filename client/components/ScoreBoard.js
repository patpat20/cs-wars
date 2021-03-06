import React, { useState, useEffect } from 'react';
import Player from './Player';

const ScoreBoard = (props) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then((resp) => resp.json())
      .then((resp) => {
        setUserInfo(resp);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  const playerlist = userInfo.map((player, index) => {
    return (
      <Player
        key={`player${index}`}
        username={player.cwusername}
        rankName={player.rank}
        totalCompleted={player.completed}
      />
    );
  });

  return (
    <div id='score-board'>
      <div id='scoreboard-title'>
        <h1>Scoreboard</h1>
      </div>

      {!userInfo.length ? <div></div> : <div>{playerlist}</div>}
    </div>
  );
};

export default ScoreBoard;
