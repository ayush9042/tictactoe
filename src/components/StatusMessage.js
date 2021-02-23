import React from 'react'

const StatusMessage = ({ winner, current }) => {

  // const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isXNext ? 'X' : 'O'}`;

  const noMoveLeft = current.board.every((el) => el !== null);

  return (
    <h2>
      {
        winner && `Winner is ${winner}`
      }{
        !winner && !noMoveLeft && `Next Player is ${current.isXNext ? 'X' : 'O'}`
      }
      {
        !winner && noMoveLeft && 'X And O Tied'
      }
    </h2>
  )
}

export default StatusMessage
