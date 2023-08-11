import {registerUser} from '../API/api'
import {useEffect, useState} from 'react'


export default function Login({token,setToken}){
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [usrLogin,setUsrLogin] = useState(null) 
    const [usrLoggedIn,setUsrLoggedIn] = useState(false)

    useEffect(() => {
        async function registerNewUser(){
            try {
            const response = await registerUser(usrLogin);
            const result = await response.json();
            console.log('1 waiting for registering user');
            console.log(result);
                console.log("2");
            await setToken(result.token);
            console.log(token);
            console.log("3");
                if (token.success ){
                    console.log("77")
                    console.log(token.success)
                }

            } catch (err) {
                console.error(err)
            }
        }
        registerNewUser();

        //console.log(token.success);
    },);
    
    function handleSubmit(event){
        event.preventDefault();
        console.log('under event prevent')
        const usrObj = {username:`${username}` , password:`${password}` };
        setUsrLogin(usrObj);
        console.log("handleSubmit activated from handleSubmit")
        console.log(username);
        console.log(password);
        console.log(usrObj);
        console.log(usrLogin);
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