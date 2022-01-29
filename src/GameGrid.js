import React from 'react';
import GameGridRow from './GameGridRow';

export default class GameGrid extends React.Component {
  render() {



    return (
      <section className="game-grid">
        <GameGridRow />
        <GameGridRow />
        <GameGridRow />
        <GameGridRow />
        <GameGridRow />
        <GameGridRow />
      </section>
    )
  }
}
