import Home from './Home'
import Login from './Login'
import MyThings from './MyThings'
import Post from './Post'
import {Routes,Route,Link} from 'react-router-dom'
import {useState} from 'react'

export default function NavBar() {
        //const [allPost,setAllPost] =useState(null)
        const [showMyThings,setShowMyThings] = useState(false);
        const [token,setToken] = useState(null)
        const [postId,setPostId] = useState(null)

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
          <Route path="/Post.jsx" element={<Post   token={token} setToken={setToken} />} />
          <Route path="/MyThings.jsx" element={<MyThings  />} />
          <Route path="/Login.jsx" element={<Login />} />
        </Routes>
        </div>

        </>
    )
}

// allPost={allPost} setAllPost={setAllPost}


