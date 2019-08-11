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
    if (value === 'recents') {
      return <span>Recents</span>
    } else if (value === 'favorites') {
      return <span>Favorites</span>
    } else if (value === 'nearby') {
      return <span>Nearby</span>
    } else if (value === 'folder') {
      return <Messaging />
    }
  }
  return (
    <div>
      {handlePages()}
      <BottomNavigation value={value} onChange={handleChange} page={value}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
      </BottomNavigation>
    </div>
  );
}