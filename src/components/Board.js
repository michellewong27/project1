import React from 'react';
import { Link } from 'react-router-dom'
import { Storage } from './../storage/storage'
import Box from './board-box'
import * as utils from '../utils/functions'

class Board extends React.Component{
    state={
        boxes: Array(9).fill(null),
        history: [],
        xIsNext: true
    }

    storage = new Storage()

    handleBoxClick=(index)=>{
        const boxes = this.state.boxes.slice();
        let history = this.state.history;

        //stop game if board gets to a winning combo
        if (utils.findWinner(boxes) || boxes[index]){
            return
        }

        //stop game if all boxes are clicked
        if (utils.areAllBoxesClicked(boxes)){
            return
        }

        //by clicking, mark box as x or o
        boxes[index] = this.state.xIsNext ? 'x' : 'o'

        //add move to the game history array
        history.push(this.state.xIsNext ? 'x' : 'o')

        //update component state with the new data
        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }

    //set component state back to initial state
    handleBoardRestart=()=>{
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        })
    }

    render(){

        //get winner (if there is one)
        const winner = utils.findWinner(this.state.boxes)

        //see if all boxes are checked
        const isFilled= utils.areAllBoxesClicked(this.state.boxes)

        //status message
        let status
            if(winner){
                //show winner
                status = `The winner is: ${winner}!`
                //push data about game into storage
                this.storage.update([`${winner} won`])
            } else if(!winner && isFilled){
                status= 'Tied game!'
                this.storage.update(['Tied Game'])
            } else {
                //no winner & game drawn, ask next player to make a move
                status = `It's ${(this.state.xIsNext ? 'x' : 'o')}'s turn`
            }

        return(
            <>
            <Link to='/' className='board-link'>Go back to scoreboard</Link>
            <div className='board-wrapper'>
                <div className='board'>
                    <h2 className="board-heading">{status}</h2>
                    <div className="board-row">
                        <Box value={this.state.boxes[0]} onClick={() => this.handleBoxClick(0)} />
                        <Box value={this.state.boxes[1]} onClick={() => this.handleBoxClick(1)} />
                        <Box value={this.state.boxes[2]} onClick={() => this.handleBoxClick(2)} />
                    </div>
                    <div className="board-row">
                        <Box value={this.state.boxes[3]} onClick={() => this.handleBoxClick(3)} />
                        <Box value={this.state.boxes[4]} onClick={() => this.handleBoxClick(4)} />
                        <Box value={this.state.boxes[5]} onClick={() => this.handleBoxClick(5)} />
                    </div>
                    <div className="board-row">
                        <Box value={this.state.boxes[6]} onClick={() => this.handleBoxClick(6)} />
                        <Box value={this.state.boxes[7]} onClick={() => this.handleBoxClick(7)} />
                        <Box value={this.state.boxes[8]} onClick={() => this.handleBoxClick(8)} />
                    </div>
                </div>

                <div className="board-history">
                    <h2 className="board-heading"> Moves History: </h2>
                    <ul className="board-historyList">
                        {this.state.history.length === 0 && <span> No moves to show</span>}
                        {this.state.history.length !== 0 && this.state.history.map((move,index) => {
                            return <h3 key={index}>Move {index + 1}: <strong>{move}</strong></h3>
                        })}
                    </ul>
                </div>
                {winner && <div className="board-footer">
                    <button className="btn" onClick={this.handleBoardRestart}>Start a new game</button>
                    </div>}
            </div>
            </>
        )
    }
}
export default Board;