import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useStateValue} from './StateProvider';
import {useState , useEffect} from "react";
import Comment from './Comment';
import db from './firebase';
import CreateComment from './CreateComment';



function Post({postId,profilePic,image,username,timestamp,message,liked,likes,comment}) {
    const [comments,setComments] = useState([]);
    const [{user},dispatch] = useStateValue();
    const handleDelete = () =>{
        db.collection("posts").doc(postId).delete();
        console.log(`comment with id ${postId} has been deleted`)
    }

    useEffect(()=>{
        db.collection("comments").orderBy("timestamp","asc").onSnapshot((snapshot) => 
            
            setComments(snapshot.docs.map((doc) => ({
                id:doc.id, data:doc.data()
            })))
            
            
           
        );
        
        
        
        console.log(comments);
    },[]);
    
   let postComments = [];
    
    let deleteIcon = null;
    if(user.displayName === username)
    {
       deleteIcon =  <div className="post__option" onClick={handleDelete}>
            <IconButton color="inherit" size="small" >
                    <DeleteOutlineIcon/>
            </IconButton>
            <p>Delete</p>
            </div>
    }
    
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__likes">{likes} likes </div>
            <div className="post__options">
            <div className="post__option" onClick={liked}>
                
                <IconButton color="inherit">
                    <ThumbUpIcon />  
                </IconButton>
                
                <p>Like</p>
            </div>
            <div className="post__option" >
                <IconButton color="inherit">
                    <ChatBubbleOutlineIcon/>
                </IconButton>
                <p>Comment</p>
            </div>
            
            <div className="post__option">
                <NearMeIcon/>
                <p>Share</p>
            </div>
            
            {deleteIcon}
            
            </div>
            <div className="post__comments">
            <CreateComment postId={postId}/>    
                 
            {
                postComments = comments.filter((comment)=>{return comment.data.postId === postId}).map((comment)=>(
                        <Comment  
                            key={comment.id} 
                            commentId={comment.id}
                            profilePic={comment.data.profilePic}
                            message={comment.data.message}
                            timestamp={new Date(comment.data.timestamp?.seconds * 1000).toLocaleDateString("en-US")}
                            username={comment.data.username}
                            image={comment.data.image} 
                            likes={comment.data.likes}        
                        />
                        ))

            }
            

            
                
            </div>
        </div>
    );
}

export default Post;
