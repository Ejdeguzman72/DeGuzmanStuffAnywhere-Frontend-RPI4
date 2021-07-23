import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameInput, setUsernameInput] = useState(false);
    const [passwordInput, setPasswordInput] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const onHandleUsernameChange = (input) => {
        setUsername(input);
        setUsernameInput(true);
    }

    const onHandlePasswordchange = (input) => {
        setPassword(input);
        setPasswordInput(true);
    }

    onSubmit = () => {
        setSubmitted(true)
        alert(`${username} has logged in`);
    }

    return (
        <div>
            {(usernameInput && passwordInput) ? (
                <div>
                    <input type="text" id="username-input" onChange={onHandleUsernameChange} /><br></br>
                    <input type="password" id="password-input" onChange={onHandlePasswordchange} /><br></br>
                    <button disabled="false" id="login-button">Submit</button>
                </div>
            ) : (
                <div>
                    <input type="text" id="username-input" onChange={onHandleUsernameChange} /><br></br>
                    <input type="password" id="password-input" onChange={onHandlePasswordchange} /><br></br>
                    <button disabled="true" id="login-button">Submit</button>
                </div>
            )}

        </div>
    )
}
