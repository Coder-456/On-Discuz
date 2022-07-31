import React, {useState} from "react"
import firebase from 'firebase/compat/app';
import {db} from '../firebase.js'
import { getAuth } from "firebase/auth";

function SendOnDiscuz({scroll}) {

    const [chat, setChat] = useState('')

    async function handleClick(e) {
        e.preventDefault()
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user.uid;
        const photoURL = user.photoURL;

        console.log(photoURL, chat)
        await db.collection('discuz').add({
            text: chat,
            uid,
            photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        setChat('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <span className="sendOnDiscuz">
            <input  type="text" value={chat} onChange={(e) => setChat(e.target.value)} placeholder="Discuz here!"/>
            <button className="shrink-on-hover" onClick={(e) => handleClick(e)}> SEND </button>
        </span>
    )
}

export default SendOnDiscuz;