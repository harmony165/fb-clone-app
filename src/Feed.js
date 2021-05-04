 import React from 'react';
import "./Feed.css"
import StoryReel from './StoryReel';
import CreatePost from './CreatePost';
import Post from './Post';
import db from './firebase';
import {useState , useEffect} from "react";
import firebase from 'firebase';


function Feed() {
    const [posts,setPosts] = useState([]);
    
    const handleComment = (commentedPost) => {
        console.log(`commented on ${commentedPost}`);
    }

    const handleLike = (likedPost) => {
        console.log(likedPost);
        let userRef = db.collection("posts").doc(likedPost);
        userRef
            .set({
             likes:firebase.firestore.FieldValue.increment(1),
            },{merge:true})
            .then(()=>{console.log(userRef)});


    }
    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({
                id:doc.id, data:doc.data()
            })
            ))
            
           
        );
        console.log(posts);
    },[]);

    
    

    return (
        <div className="feed">
            <StoryReel/>
            <CreatePost/>   
            {posts.map((post)=> 
                <Post   
                    key={post.id}
                    postId={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={new Date(post.data.timestamp?.seconds * 1000).toLocaleDateString("en-US")}
                    username={post.data.username}
                    image={post.data.image}
                    liked={()=>handleLike(post.id)}
                    likes={post.data.likes}
                    comment={()=>handleComment(post.id)}
                    
                />
            )}
        </div>
    );
}

export default Feed;
