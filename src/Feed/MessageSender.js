import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
// Database imports
import db from '../firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); /* Stops the page from refreshing */
    
        // DB code here
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        });
        

    // Reset the fields when the user presses enter
    setInput('');
    setImageURL('');
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    className="messageSender__input"
                    placeholder={`What's on your mind, ${user.displayName}?`} 
                    />
                    <input
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                    placeholder="Image URL (optional)"
                    />

                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>

                </form>
  
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
            
        </div>
    )
}

export default MessageSender;
