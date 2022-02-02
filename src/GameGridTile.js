import React from 'react';

export default class GameGridTile extends React.Component {
  render() {
    return (
      <div className="h-12 w-12 border border-gray-900" onClick={() => this.props.handleUserInput()}>

      </div>
    )
  }
}
