import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './CreatePost.css'
import {useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase';
import "./CreateComment.css";


function CreateComment(props) {
    
    const [{user},dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        db.collection("comments").add({
            postId:props.postId,
            message:input,
            profilePic: user.photoURL,
            username: user.displayName,
            image: imgUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0
        });
        setInput("");
        setImgUrl("");
        
    };
    

    return (
        
        <div className="createComment">
            <div className="createComment__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="createCommentInput" placeholder={`enter comment`} value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <input placeholder="image URL (optional)"value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)}/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="createComment__bottom">
                

            </div>
        </div>
    )
}

export default CreateComment;
