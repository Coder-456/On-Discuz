import React from 'react'
import {auth} from '../firebase.js'

function SignOut() {
    return(
        <div className="signOut shrink-on-hover">
            <button onClick={() => auth.signOut()}>Discuz Later</button>
        </div>
    )
}

export default SignOut;