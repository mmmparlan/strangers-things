import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Post from './components/Post'
import MyThings from './components/MyThings'
import Login from './components/Login'

import './App.css'

function App() {
  const [showHome,setShowHome] = useState(true);
  const [showPost,setShowPost] = useState(false);
  const [showMyThings,setShowMyThings] = useState(false);
  const [showLogin,setShowLogin] = useState(false);
  const [token,setToken] = useState([""])
  const [postId,setPostId] = useState(null)

  return (
    <>

    </>
  )
}

export default App
