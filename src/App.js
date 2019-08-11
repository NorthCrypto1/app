import React from "react";
import Login from './components/login';
import Navigation from './components/navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentview: 'Navigation'
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      currentview: view
    })
  }

  render() {
    let view = '';
    if (this.state.currentView === "Navigation") {
      view = <Navigation changeView={this.changeView} />
    }
    return (
      <div className="App">
        {view}
        <Login />
      </div>
    )
  }
}

export default App;
