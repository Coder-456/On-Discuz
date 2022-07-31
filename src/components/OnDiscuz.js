import React, {useState, useEffect, useRef} from 'react'
import { db } from '../firebase';
import SendOnDiscuz from './SendOnDiscuz';
import SignOut from './SignOut';
import { getAuth } from "firebase/auth";

function OnDiscuz() {
    
    const [discuz, setdiscuz] = useState([])
    const scroll = useRef()
    
    useEffect( () => {
        db.collection('discuz').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            setdiscuz(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    const curruser = getAuth();
    const userId = curruser.currentUser.uid;
    
    //id for each message is an automatic id created by firebase.
    return(
        <div className='column'>
            <div className='left'>
                Welcome to On-Discuz ! <br/>
                You can chat here online with anyone on this planet.<br/><br/>
                <br/><br/><br/>
                <img src="https://cdn-icons-png.flaticon.com/512/2598/2598932.png" alt="img"></img>
                <br/><br/><br/>
                <SignOut/>
                <br/>
                <div className='developer'>Developed by Harini</div>
            </div>
            <div className='right'>
                <div className='discuz'>
                    {discuz.map(({id, photoURL, text, uid}) => (
                        <div className='onemsg'>
                            {
                                (uid===userId)
                                &&
                                    <div key={id} className="sent">
                                        <img src={photoURL} alt="img"></img>
                                        <p>{text}</p>
                                        {console.log(photoURL)}
                                    </div> 
                                
                            }
                            {
                                !(uid===userId)
                                &&
                                    <div key={id} className="received">
                                        <img src={photoURL} alt="img"></img>
                                        <p>{text}</p>
                                        {console.log(photoURL)}
                                    </div> 
                            }
                        </div>
                    ))}
                </div>
                <div className='sendbar'>
                    <SendOnDiscuz scroll={scroll}/>
                    <div ref={scroll}></div>
                </div>
            </div>
        </div>
    )
}

export default OnDiscuz;