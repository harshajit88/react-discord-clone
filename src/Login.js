import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {
    const signIn = () => {

    }
    return (
        <div className = 'login'>
            <h2>I am the login page</h2>

            <div className="login__logo">
                <img src="https://logovtor.com/wp-content/uploads/2020/07/discord-logo-vector.png" alt="" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
