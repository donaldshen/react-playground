import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Square = (props: {
  value?: string
  onClick (): void
}) => (
  <button
    className='square'
    onClick={props.onClick}
  >
    {props.value}
  </button>
)

type SquareType = ('X' | 'O' | undefined)

function Board (props: {
  squares: SquareType[]
  onClick (i: number): void
}) {
  const renderSquare = (i: number) => <Square
    key={i}
    value={props.squares[i]}
    onClick={() => props.onClick(i)}
  />
  const renderRow = (r: number) => <div key={r} className='board-row'>{
    [0, 1, 2].map(c => renderSquare(r * 3 + c))
  }</div>
  return <div>{[0, 1, 2].map(renderRow)}</div>
}

class Game extends Component {
  state: {
    history: {squares: SquareType[]}[]
    xIsNext: boolean
    stepNumber: number
  } = {
    history: [{
      squares: Array(9).fill(undefined),
    }],
    xIsNext: true,
    stepNumber: 0,
  }

  handleClick (i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    let { squares } = history[history.length - 1]
    if (calculateWinner(squares) || squares[i]) return

    const { xIsNext } = this.state
    ;(squares = squares.slice())[i] = xIsNext ? 'X' : 'O'
    this.setState({
      history: [...history, { squares }],
      xIsNext: !xIsNext,
      stepNumber: history.length,
    })
  }

  jumpTo (step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render () {
    const { history, stepNumber } = this.state
    const { squares } = history[stepNumber]
    const winner = calculateWinner(squares)
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`

    const moves = history.map((_, move) => {
      const desc = `Go to ${ move ? `move #${move}` : 'game start' }`
      return <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
    })

    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={squares}
            onClick={this.handleClick.bind(this)}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

function calculateWinner (squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const winner = lines.find(([a, b, c]) => {
    const v = squares[a]
    return v && v === squares[b] && v === squares[c]
  })
  return winner ? squares[winner[0]] : undefined
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
)
