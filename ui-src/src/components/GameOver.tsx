import * as React from 'react';
import './GameOver.css';


class GameOver extends React.Component<any, {}> {

  public render() {
    return <div className="game-over">
      <h1>Game Over</h1>
      <div className="game-leaderboard">
        {"leaderboard here"}
      </div>
      <div className="game-chat">
        {"chat here"}
      </div>
    </div>
  }
}

export default GameOver;
