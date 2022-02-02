import React from 'react';
import GameGridRow from './GameGridRow';

export default class GameGrid extends React.Component {
  render() {
    return (
      <section className="grid gap-4 p-3">
        <GameGridRow handleUserInput={this.props.handleUserInput}/>
        <GameGridRow />
        <GameGridRow />
        <GameGridRow />
        <GameGridRow />
        <GameGridRow />
      </section>
    )
  }
}
