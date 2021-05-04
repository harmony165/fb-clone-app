import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import "./Comment.css"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import db from './firebase';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


function Comment({commentId,profilePic,image,username,timestamp,message,likes}) {
    const [{user},dispatch] = useStateValue();


    const handleLike = () => {
        let userRef = db.collection("comments").doc(commentId);
        userRef
            .set({
             likes:firebase.firestore.FieldValue.increment(1),
            },{merge:true})
            .then(()=>{console.log(userRef)});


    }

    const handleDelete = () =>{
        db.collection("comments").doc(commentId).delete();
        console.log(`comment with id ${commentId} has been deleted`)
    }
    
    let deleteIcon = null;
    if(user.displayName === username)
    {
            deleteIcon =    <div className="comment__topInfoRight">
                                <IconButton color="inherit" size="small" onClick={handleDelete}>
                                    <DeleteOutlineIcon/>
                                </IconButton>
                
                            </div>
    }
    
    
    return (


        <div className="comment">
            <div className="comment__top">
                <div className="comment__left">
                    <Avatar src={profilePic} className="comment__avatar"/>
                    <div className="comment__topInfo">
                        <h3>{username}</h3>
                        <p>{message}</p>
                        {image ? <>
                            <div className="comment__image">
                            <img src={image} alt={null}/>
                        </div>
                        </>: null}
                        <div className="comment__likes" >
                            <div className = "likeButton" onClick={handleLike}>
                            <ThumbUpIcon/>    
                            <p> Like</p>
                        </div>   
                            <div className="likes">{likes} likes</div>
                        </div>
                        
                        
                    </div>
                    
                </div>
                <div>       
                </div>
                {deleteIcon}
                
            </div>
            <div className="comment__bottom">
               <p>{timestamp}</p>
            </div>
        </div>
    )   
}

export default Comment;
