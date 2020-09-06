import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Comment from '../Comment/Comment';
import PostAddIcon from '@material-ui/icons/PostAdd';
const useStyles = makeStyles({
    root: {
      background: '#e8e8e8',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      padding:'20px',
      margin:'20px',
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
const PostDetails = () => {
    const classes = useStyles();
    const {id}= useParams();
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response =>response.json())
        .then(data =>setPosts(data))
    },[])
    return (
        <Container className={classes.root}>
            <div className="post">
            <h2 className={classes.postId}><PostAddIcon/>PostDetailsId : {posts.id}</h2>           
            <h3 className={classes.postTitle}>Title : {posts.title}</h3>
            <h3 className={classes.postBody}>Body : {posts.body}</h3>
            <Comment postId={id} ></Comment>
            </div>          
        </Container>
    );
};

export default PostDetails;