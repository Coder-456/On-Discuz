import React from 'react'
import firebase from 'firebase/compat/app';
import {auth} from '../firebase'

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return(
        <div className='signIn'>
            <div className='spantab'>
                <div><span className="on">"On,</span><span className='afteron'><b>Discuz</b></span></div>
                <div className='glad'>Glad to see you! <br/> Join and discuss anything</div>
                <button className="signInbutton shrink-on-hover" onClick={() => signInWithGoogle()}>Sign In with Google</button>
            </div>
        </div>
    )
}

export default SignIn;