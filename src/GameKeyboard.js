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
      <div className='GameKeyboard'>
        <div className="GameKeyboardRow flex justify-center items-center mb-2 mx-auto">
          {
            keyboardFirstRow.map(letter => {
              return <div onClick={handleClick} className="flex justify-center items-center rounded h-16 w-10 text-white mr-1 bg-black last-of-type:mr-0" data-key={letter}>{letter}</div>
            })
          }
        </div>
        <div className="GameKeyboardRow flex justify-center items-center mb-2 mx-auto">
          <div className="flex-[.5]"></div>
          {
            keyboardSecondRow.map(letter => {
              return <div onClick={handleClick} className="flex justify-center items-center rounded h-16 w-10 text-white mr-1 bg-black last-of-type:mr-0" data-key={letter}>{letter}</div>
            })
          }
          <div className="flex-[.5]"></div>
        </div>
        <div className="GameKeyboardRow flex justify-center items-center mb-2 mx-auto">
          <div className="flex justify-center items-center rounded h-16 w-10 text-white mr-1 bg-black last-of-type:mr-0 text-xs">Enter</div>
            {
            keyboardThirdRow.map(letter => {
              return <div onClick={handleClick} className="flex justify-center items-center rounded h-16 w-10 text-white mr-1 bg-black last-of-type:mr-0" data-key={letter}>{letter}</div>
            })
          }
          <div className="flex justify-center items-center rounded h-16 w-10 text-white mr-1 bg-black last-of-type:mr-0 text-xs">Del</div>
        </div>
      </div>
    )
  }
}
