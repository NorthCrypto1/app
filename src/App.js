import React from "react";
import Login from './components/login';
import Navigation from './components/navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentview: 'Navigation'
    }
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Login />
      </div>
    )
  }
}

export default App;
