import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Tails from "./components/Tails";
import Navbar from "./components/Navbar1";
import Footer from "./components/Footer"
import dogs from "./dogs.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    tailClickCount: 0,
    guessed: [],
    highscore: 0,
    tails: [],
    message: "Click an Image to Play"
  };
  componentDidMount() {
    this.dogWag()
    console.log("loaded")
  }
  dogWag = () => {
    let tailzArr = dogs
    let countz = dogs.length - 1
    while (countz > 0) {
      const rand = Math.floor(Math.random() * (1 + countz))
      const holder = tailzArr[countz]
      tailzArr[countz] = tailzArr[rand]
      tailzArr[rand] = holder
      countz--
    }
    this.setState({ tails: tailzArr })
  }
  youLost = () => {
    this.setState({
      message: "You guessed incorrectly!",
      tailClickCount: 0,
      guessed: []
    })
    this.dogWag()
    //reset score
    //rerender dogs
    //clear guessed

  }
  handleClick = id => {
    console.log("clicked")
    const guessedArr = this.state.guessed
    if (guessedArr.includes(id)) {
      this.youLost()
      return
    }
    guessedArr.push(id)
    this.dogWag()
    if (this.state.tailClickCount + 1 > this.state.highscore) {
      this.setState({ highscore: this.state.tailClickCount + 1 })
    }
    this.setState({
      message: "You guessed correctly!",
      tailClickCount: this.state.tailClickCount + 1,
      guessed: guessedArr
    });

    console.log(this.state.tailClickCount);
  }

  render() {
    return (

      <Wrapper>

        <Navbar

          message={this.state.message}
          highScore={this.state.highscore}
          currentScore={this.state.tailClickCount}
        />

        <Jumbotron />
        <div className="container" id="card-container">
          <div className="row">          
       <div className="card-columns">

                {this.state.tails.map(dog => (
                  <Tails
                    id={dog.id}
                    key={dog.id}
                    name={dog.name}
                    image={dog.image}
                    hanClick={this.handleClick}

                  />))}
              </div>
            </div>
          </div>
        
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
