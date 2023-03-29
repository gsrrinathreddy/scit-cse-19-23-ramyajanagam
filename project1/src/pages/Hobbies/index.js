import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 1000, height:500 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRja3LX6Q500gTSQf2t-PaPg7H5TD1dsGArGqLkqP9Caw&usqp=CAU&ec=48665701',
    title: 'Drawing,Painting',
    
   
  },
  
  {
    img: 'https://www.thesprucecrafts.com/thmb/G-BP7zjTN7f2jlUSIvDrX6gNVjs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Youngchildartsandcrafts-GettyImages-119250373-5907e7da3df78c92835009aa.jpg',
    title: 'Making paper crafts',
    
  },
  
  
];