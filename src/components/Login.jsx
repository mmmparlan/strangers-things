import {registerUser} from '../API/api'
import {useEffect, useState} from 'react'


export default function Login({token,setToken}){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [usrLogin,setUsrLogin] = useState("")
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [usrLoggedIn,setUsrLoggedIn] = useState(false)

    useEffect(() => {
        if (!usrLogin || userLoggedIn) { return; }

        async function registerNewUser(){
            try {
                const response = await registerUser(usrLogin);
                const result = response;

                await setToken(result.data.token);
                setUserLoggedIn(true);
            } catch (err) {
                console.error(err)
            }
        }
        registerNewUser();
    });
    
    function handleSubmit(event){
        event.preventDefault();
        const usrObj = {username:`${username}` , password:`${password}` };
        setUsrLogin(usrObj);
    }

    return (
        <>
        <div>
            <h3>Welcome to the Login page. Please login for the best user experience</h3>

            {/* {err && <p>{err}</p>} */}
        <form onSubmit={handleSubmit}>
        <label>
            Username:{" "} 
            <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
            Password:{" "} 
            <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button>Submit</button>
        </form>
        <p></p>
        </div>
        </>
    )
}