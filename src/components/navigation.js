import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(newValue) {
    this.setState({
      value: newValue
    })
    var x = document.getElementById('MuiBottomNavigation-root');
    var y = x.getAttribute('page');
    this.props.changeView(y)
  }

  render() {
    return (
      <BottomNavigation value={this.State.value} onChange={this.changeView} page={value}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="friends" value="friends" icon={<Icon><img className="icon-image" src="./icons/icons_partners.png" alt="icon" /> </Icon>} />
      </BottomNavigation>
    )
  }
}
export default Navigation;