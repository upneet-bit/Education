import React, { Component, useState } from 'react';
import { Divider, Container } from '@material-ui/core';
import { Card,CardActionArea } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
}));

const SingleInstitute=({institute})=>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    // {console.log({institute})}


return(
    <div>
    <div className="collapsable-container">
  
    <Card className={classes.root} >
    <CardHeader
        title={institute.name}
        subheader={institute.location}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {institute.excerpt}
        </Typography>
      </CardContent>
    </Card>
    <Divider/>
        </div>
        </div>
    );
}


export default SingleInstitute;