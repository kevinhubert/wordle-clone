import React from 'react';

export default class GameKeyboard extends React.Component {
  render() {

    // Keyboard data
    const keyboardFirstRow = ['q','w','e','r','t','y','u','i','o','p'];
    const keyboardSecondRow =['a','s','d','f','g','h','j','k','l'];
    const keyboardThirdRow = ['z','x','c','v','b','n','m']

    const handleClick = (e) => {
      console.log(e.target.getAttribute('data-key'))
    }

    return (
      <div className='game-keyboard'>
        <div className="game-keyboard__row">
          {
            keyboardFirstRow.map(letter => {
              return <div onClick={handleClick} className="game-keyboard__letter" data-key={letter}>{letter}</div>
            })
          }
        </div>
        <div className="game-keyboard__row">
          <div className="game-keyboard__letter--spacer"></div>
          {
            keyboardSecondRow.map(letter => {
              return <div onClick={handleClick} className="game-keyboard__letter" data-key={letter}>{letter}</div>
            })
          }
          <div className="game-keyboard__letter--spacer"></div>
        </div>
        <div className="game-keyboard__row">
          <div className="game-keyboard__letter game-keyboard__letter--enter">Enter</div>
            {
            keyboardThirdRow.map(letter => {
              return <div onClick={handleClick} className="game-keyboard__letter" data-key={letter}>{letter}</div>
            })
          }
          <div className="game-keyboard__letter game-keyboard__letter--delete">Del</div>
        </div>
      </div>
    )
  }
}
