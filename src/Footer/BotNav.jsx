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
    width: '100%',
    height: 60,
    zIndex:9999
  },
  root1: {
    
    minWidth: 10
    
  },
});

export default function LabelBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
    props.setPage(newValue);
  }
  if(isMobileDevice()){
  return ( 
    <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />}className={classes.root1} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />}className={classes.root1} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />}className={classes.root1} />
      <BottomNavigationAction label="HOME" value="Home" icon={<Icon>folder</Icon>} className={classes.root1}/>
      <BottomNavigationAction label="NEWS" value="News" icon={<Icon>folder</Icon>} className={classes.root1}/>
      <BottomNavigationAction label="Folder2" value="folder2" icon={<Icon>folder</Icon>} className={classes.root1}/>
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