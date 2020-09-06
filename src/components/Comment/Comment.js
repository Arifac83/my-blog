import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'; 
import CommentDetails from '../CommentDetails/CommentDetails';


const Comment = (props) => {
    const postId =props.postId;   
    const [comments,setComments] =useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response=>response.json())
        .then(data=>setComments(data))
    },[])
    return (
        <Container>
           {
               comments.map(comment =>
               <CommentDetails 
                comment={comment}
                key={comment.id}
               ></CommentDetails>)
           }       
           
        </Container>
    );
};

export default Comment;