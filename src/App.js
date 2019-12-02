import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Tails from "./components/Tails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import dogs from "./dogs.json";

class App extends Component {
  state = {
    dogs
  };
  removeDog = id => {
    // Filter this.state.dogs for dogs with an id not equal to the id being removed
    const dogs = this.state.dogs.filter(dog => dogs.id !== id);
    // Set this.state.dogs equal to the new dogs array
    this.setState({ dogs });
  };
  render() {
    return (
      // Map over this.state.dogs and render a TailsCard component for each dog object
     <Wrapper>
      <Navbar>

      </Navbar>
      
        <Jumbotron>
        </Jumbotron>

        {this.state.dogs.map(dog => (
          <Tails
            id={dog.id}
            key={dog.id}
            name={dog.name}
            image={dog.image}

          />))}
        <Footer></Footer>
      </Wrapper>                
    );
  }
}

export default App;
