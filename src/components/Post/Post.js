import React from 'react';
import { Button, Container } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      background: '#e8e8e8',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      padding:'20px',
      margin:'20px 0',
    },
    postId:{
        color:'#052D5B',
    },
    postTitle:{
        color:'#4C8BF4',
    },
    postBody:{
        color:'#4C8BF4',
    },
  });

const Post = (props) => {
    const classes = useStyles();
    const {id,title,body} = props.posts;   
    console.log(props);
    return (
        <Container className={classes.root}>
            <h3 className={classes.postId}><PostAddIcon/>Posts : {id}</h3>
            <h3 className={classes.postTitle}>Title : {title}</h3>
            <h4 className={classes.postBody}>Body : {body}</h4>
            <Link to={`/posts/${id}`}>
                <Button variant="contained" color="secondary">
                    <ArrowRightIcon/>Read More
                </Button>         
            </Link>   
        </Container>
    );
};

export default Post;