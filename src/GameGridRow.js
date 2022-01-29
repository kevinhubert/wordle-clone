import React from 'react';
import GameGridTile from './GameGridTile';

export default class GameGridRow extends React.Component {
  render() {
    return (
    <div className="game-grid__row">
      <GameGridTile />
      <GameGridTile />
      <GameGridTile />
      <GameGridTile />
      <GameGridTile />
    </div>
    )
  }
}
