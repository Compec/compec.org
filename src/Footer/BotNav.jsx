import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';

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

      {props.pages.map(value=> (

<BottomNavigationAction label={value} value={value} icon={<HomeIcon />}className={classes.root1} />


      )
        
        
        )}
      
     
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