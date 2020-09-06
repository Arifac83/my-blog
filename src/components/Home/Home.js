import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response =>response.json())
        .then(data =>setPosts(data))
    },[])
    return (
        <Container maxWidth="md">
             <Header></Header>
            {
                posts.map(posts=><Post
                    posts={posts}
                    key={posts.id}
                    ></Post>)
            }
            <Footer></Footer>
        </Container>
    );
};

export default Home;