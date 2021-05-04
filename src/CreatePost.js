import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './CreatePost.css'
import {useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase';


function CreatePost() {
    
    const [{user},dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        db.collection("posts").add({
            message:input,
            profilePic: user.photoURL,
            username: user.displayName,
            image: imgUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0
        });
        console.log(user);
        setInput("");
        setImgUrl("");
        
    };
    

    return (
        <div className="createPost">
            <div className="createPost__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="createPostInput" placeholder={`Whats on your mind ${user.displayName} ? `} value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <input placeholder="image URL (optional)"value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)}/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="createPost__bottom">
                

            </div>
        </div>
    )
}

export default CreatePost;
