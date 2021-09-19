import React from "react";

const Check = (SomeComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    handleCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    render() {
      return (
        <SomeComponent
          counter={this.state.counter}
          handleCounter={this.handleCounter}
        />
      );
    }
  }

  return SomeComponent;
};

export default Check;
