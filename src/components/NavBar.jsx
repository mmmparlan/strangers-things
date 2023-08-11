import Home from './Home'
import Login from './Login'
import MyThings from './MyThings'
import Post from './Post'
import {Routes,Route,Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {fetchPosts} from '../API/api'

export default function NavBar() {
        const [allPost,setAllPost] =useState([""]);
        //const [showMyThings,setShowMyThings] = useState(false);
        const [token,setToken] = useState(null)
        const [postId,setPostId] = useState(null)

        useEffect(() => {
            async function fetchAllPosts(){
            try {
                const allPostObj = await fetchPosts(token);
                setAllPost(allPostObj);
                console.log("using useEffect to call API from api.js");
                console.log(allPost);
            } catch (err) {
                console.error(err)
            }
        }
        fetchAllPosts()
        },[]);

    return (
        <>
        <div className="viewBox">
        <div className="navBarBox">
        
        <Link to='/Home.jsx'>&nbsp;&nbsp;Home&nbsp;&nbsp;</Link>
        <Link to='/Post.jsx'>&nbsp;&nbsp;All Post&nbsp;&nbsp;</Link>
        <Link to='/MyThings.jsx'>&nbsp;&nbsp;My Things&nbsp;&nbsp;</Link>
        <Link to='/Login.jsx'>&nbsp;&nbsp;Log In/Out&nbsp;&nbsp;</Link>

        </div>

        <Routes className="mainContent">
          <Route path="/Home.jsx" element={<Home  />} />
          <Route path="/Post.jsx" element={<Post postId={postId} setPostId={setPostId} allPost={allPost} setAllPost={setAllPost} token={token} setToken={setToken} />} />
          <Route path="/MyThings.jsx" element={<MyThings  />} />
          <Route path="/Login.jsx" element={<Login token={token} setToken={setToken} />} />
        </Routes>
        </div>

        </>
    )
}

// allPost={allPost} setAllPost={setAllPost}


