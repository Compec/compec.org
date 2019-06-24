import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    display:"flex",
    bottom: 0 ,
    position: "fixed",
    width: 500
  },
  root1: {
    
    minWidth: 40
    
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  if(isMobileDevice()){
  return ( 
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />}className={classes.root1} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />}className={classes.root1} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />}className={classes.root1} />
      <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} className={classes.root1}/>
      <BottomNavigationAction label="Folder1" value="folder1" icon={<Icon>folder</Icon>} className={classes.root1}/>
      <BottomNavigationAction label="Folder2" value="folder2" icon={<Icon>folder</Icon>} className={classes.root1}/>
      <BottomNavigationAction label="Folder3" value="folder3" icon={<Icon>folder</Icon>} className={classes.root1}/>
    </BottomNavigation>
  );
  }

  else{
    return(<div></div>);
  }
  function isMobileDevice() {
     return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    
  };
  
  

}