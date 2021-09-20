import React, { useState } from "react";

// const Check = (SomeComponent) => {
//   class NewComponent extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         counter: 0,
//       };
//     }

//     handleCounter = () => {
//       this.setState({ counter: this.state.counter + 1 });
//     };

//     render() {
//       return (
//         <SomeComponent
//           counter={this.state.counter}
//           handleCounter={this.handleCounter}
//         />
//       );
//     }
//   }

//   return SomeComponent;
// };

const CheckWrapper = (WrappedComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    return <WrappedComponent counter={counter} setCounter={setCounter} />;
  };
  return NewComponent;
};

export default CheckWrapper;

// const IronMan = withSuit( TonyStark )
// IronMan with suit passing in Tony Stark as a parameter here Tony Stark is
// original component with suit is the function which
// will enhance Tony Stark and return Iron Man which is enhanced component

// https://reactjs.org/docs/higher-order-components.html
