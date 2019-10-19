import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState({
       hasBeenClicked: true
    },() => console.log("hasBeenClicked (Callback of setState after finished): ", this.state.hasBeenClicked))
    console.log("hasBeenClicked (inside of handleClick): ", this.state.hasBeenClicked)
  };

  render() {
    console.log("hasBeenClicked (inside of render()): ", this.state.hasBeenClicked)
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick; 