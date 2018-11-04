import React from "react";
import ReactDOM from 'react-dom';


class Score extends React.Component{
    state = {
        Score: 5,
        Number_of_times :0

    };
    incrementScore = () => {
            this.setState({Score: this.state.Score + 1})
    };
    numberOfTimesPlayed = () => {
        this.setState({Number_of_times : this.state.Number_of_times + 1})

    };
    handelClick = () =>{
            this.incrementScore();
            this.numberOfTimesPlayed();
    };
    render(){
        return (
            <div className ="information  container">
                <h1>Player 1</h1>
                <p>Score : {this.state.Score}</p>
                <p>Number of times: {this.state.Number_of_times}</p>
                <button onClick = {this.handelClick} >play</button>
            </div>
            
        );
    }

}
export default Score;