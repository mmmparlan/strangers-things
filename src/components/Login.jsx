import {registerUser,login} from '../API/api'
import {useEffect, useState} from 'react'

function LoginView({setUserLoggedIn,userLoggedIn,setToken,usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn,usrLogin,setUsrLogin}){
    
    if (userLoggedIn) {return;}
    
    useEffect(()=>{
        if (usrLogin){
            async function loggingInUser(){
            
                console.log(`logging in existing user ${usrLogin}`)
                try {
                const response = await login();
                const result = response;
    
                console.log(result.data.token);
                await setToken(result.data.token);
                
                console.log('login useEffect activated')
                setUserLoggedIn(true);
                setToken()
    
                } catch (err) {
                    console.error(err)
                }
            }
            loggingInUser();
        }
        
    },[usrLogin])

    function handleSubmit(event){
        event.preventDefault();
        const usrObj = {username:`${usernameLogIn}` , password:`${passwordLogIn}` };
        setUsrLogin(usrObj);
        console.log('trying to login')
        console.log(usrLogin)
    }

    return (
        <>
        <div>
            <h1>Log In to view your posts and messages</h1>

        {/* {err && <p>{err}</p>} */}
        <form onSubmit={handleSubmit}>
        <label>
        Username:{" "} 
        <input 
        value={usernameLogIn} 
        onChange={(e) => setUsernameLogIn(e.target.value)} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
        Password:{" "} 
        <input 
        type="password" 
        value={passwordLogIn} 
        onChange={(e) => setPasswordLogIn(e.target.value)}/>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button>Log In</button>
        </form>
        <p></p>
        </div>
        </>
    )
}




function LoggedInView({userLoggedIn,setToken,setUserLoggedIn}){
    if (!userLoggedIn){return;}

    function handleClick(){
        //event.preventDefault();
        setToken(null);
        console.log('setToken set to null');
        setUserLoggedIn(false);
        console.log('setUserLoggedIn to false');
    }
    
    return (
    <>
    <h2>Thank you for Logging In</h2>
    <br></br>
    <button onClick={handleClick}>Log Out?</button>
    </>
    )
}





function LoggedOutView({userLoggedIn,username,setUsername,password,setPassword,setRegisterNewUsr}){
    if (userLoggedIn) {return;}

    function handleSubmit(event){
        event.preventDefault();
        const usrObj = {username:`${username}` , password:`${password}` };
        setRegisterNewUsr(usrObj);
    }

    return(
    <>
    <div>
        <br></br>
        <br></br>
        <h3>Sign Up! </h3>
        <h4>Create an account to post your Things and to ask about other people's Things </h4>

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





export default function Login({token,setToken,userLoggedIn,setUserLoggedIn}){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [usernameLogIn,setUsernameLogIn] = useState('');
    const [passwordLogIn,setPasswordLogIn] = useState('');
    const [usrLogin,setUsrLogin] = useState(null)
    const [registerNewUsr,setRegisterNewUsr] = useState(null) 
    
    useEffect(() => {
        
        if(registerNewUsr) {
            async function registerNewUser(){
                try {
                const response = await registerUser(registerNewUsr);
                const result = response;
    
                console.log(result.data.token);
                await setToken(result.data.token);
                
                console.log("setUserLoggedIn set to true")
                setUserLoggedIn(true);
                } catch (err) {
                    console.error(err)
                }
            }
            registerNewUser();
        }

        
    }, [registerNewUsr]);
    

    return (
        <>
        <LoginView usrLogin={usrLogin} setUsrLogin={setUsrLogin} passwordLogIn={passwordLogIn} setPasswordLogIn={setPasswordLogIn} usernameLogIn={usernameLogIn} setUsernameLogIn={setUsernameLogIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
        <LoggedInView userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} setToken={setToken}/>
        <LoggedOutView setRegisterNewUsr={setRegisterNewUsr} userLoggedIn={userLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
        </>
    )
}