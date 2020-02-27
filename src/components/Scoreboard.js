import React from 'react';
import { Link } from 'react-router-dom';
import { Storage } from './../storage/storage'

class Scoreboard extends React.Component{
    state={
        scoreboard: []
    }

    //load any data from local storage & update the state of scoreboard
    async componentDidMount(){
        // await is waiting for promise to be resolved before moving on
            //need to have storage before you set the state of scoreboard to storage
        let storage = await new Storage().getData()
        this.setState({
            scoreboard: storage
        })
    }

    render(){
        return(
            <div className="game">
                <h1>Recent games:</h1>
                <ul>
                    {this.state.scoreboard.map( (leader, key) => {
                        return <li key={key}>{leader}</li>
                    })}
                </ul>
                <Link to='/board'>
                    <button className="btn">Start a new game</button>
                </Link>
            </div>
        )
    }
}
export default Scoreboard;