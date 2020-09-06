import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import commentImage from '../../images/blog.png'
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#fcfcfc 30%, #ffccdf  90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    display:'flex',
    width: '1000px',
    margin: '20px auto',
  },
  comment:{
    color:'green',
    width: '70%',
  },
  commentPicture:{
    width: '30%',
    display: 'inline-block',
    marginTop:'20px'
  },
  commentHeading:{
    color:'#f50057'
  },
  commentName:{
    color:'#58585A'
  },
  commentEmail:{
    color:'#58585A'
  },
  commentBody:{
    color:'#58585A'
  }
});
const CommentDetails = (props) => {
  console.log(props.comment);
  const classes = useStyles();   

    return (
        <Container className={classes.root}>
          <div className={classes.commentPicture}>
            <img src={commentImage}/>
          </div>
          <div className={classes.comment}>
             <h2 className={classes.commentHeading}><CommentIcon/>Comment :{props.comment.id}</h2>  
             <h3 className={classes.commentName}>Name  : {props.comment.name}</h3>  
             <h3 className={classes.commentEmail}>E-mail : {props.comment.email}</h3>  
             <h3 className={classes.commentBody}>Body : {props.comment.body}</h3> 
          </div>
             
        </Container>
    );
};

export default CommentDetails;