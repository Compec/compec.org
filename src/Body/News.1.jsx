import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {IconButton,Container} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';



  /**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 const tileData = [
     {
       img: "https://source.unsplash.com/random",
       title: 'Image',
      author: 'author',
       featured: true,
     },
     {
      img: "https://source.unsplash.com/random",
      title: 'Image',
     author: 'author',
      featured: true,
    },
    {
      img: "https://source.unsplash.com/random",
      title: 'Image',
     author: 'author',
      featured: false,
    },
    {
      img: "https://source.unsplash.com/random",
      title: 'Image',
     author: 'author',
      featured: true,
    },
    {
      img: "https://source.unsplash.com/random",
      title: 'Image',
     author: 'author',
      featured: true,
    },
    {
      img: "https://source.unsplash.com/random",
      title: 'Image',
     author: 'author',
      featured: true,
    },

     
   ];

 export default function News(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "auto",
      height: props.height,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));

    const classes = useStyles();

  // var temp=true;

  return (

    <div className={classes.root}>

{/* cellHeight={200} */}
      <GridList   spacing={1} className={classes.gridList}  >
        {tileData.map(tile => (
          <GridListTile  key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
          <div   >
            <GridListTileBar  
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton onClick={function(){window.open(tile.img, '_blank');}} aria-label={`star ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            
</div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );

}