import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent'
import Counter from './Counter'
import Say from './Say';
import IterationSample from './IterationSample.js';

// function App() {
//   const name = '리액트';

//   return (
//     <>
//       <ValidationSample />
//     </> 
//   );
// }

class App extends Component {
  render() {
    return (
      <>
        <IterationSample />
      </>
    )
  }
}

export default App;

