import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../utils/firebase.js'
import axios from 'axios'
import {serverUrl} from '../App'


function Auth() {
    
    const handleGoogleSignIn = async () => {
        try {
            console.log(serverUrl)
            const result = await signInWithPopup(auth, provider);
            const name = result.user.displayName;
            const email = result.user.email;
            const response = await axios.post(`${serverUrl}/api/auth/google`, { name, email }, { withCredentials: true });
            console.log(response.data)
        }
        catch (error) {
            console.log(error)

        }

    }



    return (
        <>
            <div>Auth

                <button className="m-4 border 2px solid " onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>

        </>

    )
}

export default Auth