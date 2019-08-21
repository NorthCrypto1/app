import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Messaging from './messaging';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handlePages() {
    if (value === 'profile') {
      return <span>Recents</span>
    } else if (value === 'wallet') {
      return <span>Favorites</span>
    } else if (value === 'nearby') {
      return <span>Nearby</span>
    } else if (value === 'messenger') {
      return <Messaging />
    }
  }
  return (
    <div>
      {handlePages()}
      <BottomNavigation value={value} onChange={handleChange} page={value}>
        <BottomNavigationAction label="Profile" value="profile" icon={<Icon><img src="./icons/icons_identity.png" className="icon-image" /></Icon>} />
        <BottomNavigationAction label="Wallet" value="wallet" icon={<Icon><img src="./icons/icons_wallet.png" className="icon-image" /></Icon>} />
        <BottomNavigationAction label="Posts" value="posts" icon={<Icon><img src="./icons/icons_globe.png" className="icon-image" /> </Icon>} />
        <BottomNavigationAction label="Messenger" value="messenger" icon={<Icon><img src="./icons/icons_partners.png" className="icon-image" /></Icon>} />
      </BottomNavigation>
    </div>
  );
}