import React from 'react';
import GameGridTile from './GameGridTile';

export default class GameGridRow extends React.Component {
  render() {
    return (
    <div className="grid grid-cols-5 gap-1">
      <GameGridTile handleUserInput={this.props.handleUserInput}/>
      <GameGridTile />
      <GameGridTile />
      <GameGridTile />
      <GameGridTile />
    </div>
    )
  }
}
