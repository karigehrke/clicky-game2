import React, { Component } from 'react';
import "./style.css";
import game from "../../game.json";
import Card from "../Card"
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";

const firstCard = game[0];
console.log(firstCard)

class Game extends Component {

state = {
  score: 0,
  highScore: 0,
  game,
  clickedList: []
}

componentDidMount() {
  const { game } = this.state;
  this.shuffleArr(game);
}

  handleClick = (id) => {
    const {score, clickedList, game, highScore } = this.state;
    this.shuffleArr(game);
    const alreadyClicked = clickedList.includes(id);
    if (alreadyClicked) {
      const bestScore = Math.max(score, highScore)
      this.resetGame(bestScore)

    } else {
      const newScore = score + 1;
      this.setState({
        score: score + 1,
        clickedList: [...clickedList, id] 
      })
      if (newScore === game.length) {
        alert("you won")
        // can change new score to be perfect game
        this.resetGame(newScore)
      }
    }
  }

  resetGame = highScore => {
    this.setState({
      score: 0,
      clickedList: [],
      highScore: highScore
    })
  }

  shuffleArr = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

  this.setState({
    game: [...array]
  })
  }

    render() {
  return (
    <div>
      <Navbar 
      primaryHeadingText="Score:"
      primaryHeadingValue={this.state.score}
      secondaryHeadingText="Top Score:"
      secondaryHeadingValue={this.state.highScore}
      />
      <Jumbotron />
      <div className="card-flex">
      {this.state.game.map((card) => (
        // <div className="shadow card card-flex d-inline-flex">
        <Card
          name={card.name}
          image={card.image}
          key={card.id}
          id={card.id}
          handleClick={this.handleClick}
          />
      // </div>
      ))} 
      </div>
      <Footer />
      </div>
  );
}
}

export default Game;