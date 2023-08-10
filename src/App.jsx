import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  const [showMyThings,setShowMyThings] = useState(false);
  const [token,setToken] = useState(null)
  const [allPost,setAllPost] =useState([""])
  const [postId,setPostId] = useState(null)

  return (
    <>
    <NavBar 
    showMyThings={showMyThings} 
    setShowMyThings={setShowMyThings}
    token={token} 
    setToken={setToken}
    postId={postId} 
    setPostId={setPostId}
    allPost={allPost}
    setAllPost={setAllPost}
    />
    </>
  )
}

export default App
