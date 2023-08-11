import {fetchPosts} from '../API/api.js'
import {useState,useEffect} from 'react'


export default function Post({postId,setPostId,allPost,setAllPost,token}){

    //this is the next part i need to work on. send a message onClick
    async function handleClick(){
        console.log("handleClick activiated")
    }
    console.log(allPost.data.posts);

    return (
        <>
        <h3>View All Our Posts Here. We Hope You Find That Thing You Were Looking For!</h3>
        <div>

        {allPost.data.posts.map((post) => {
                    return (
                    <div className='postTableDiv'>
                    <table className='postTable'>
                    <thead className='postTitle'>
                        <tr key="tHead">
                        <th colSpan="4">Post: {post.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key="tbody">
                    <td className="descriptionCell" key='postDescription'>Description:</td>
                    <td className="willDeliverCell" key='postDeliver'>Will Deliver</td>
                    <td className="priceCell" key='postPrice'>Price</td>
                    <td className="sendMessage" key='sendMessage'>Interested?</td>
                    </tr>
                    <tr key={post._id}>
                    <td key={post.description}>{post.description}</td>
                    <td key={post.willDeliver}>{`${post.willDeliver}`}</td>
                    <td key={post.price}>{post.price}</td>
                    <td className='sendMessBtn' rowSpan="2">
                        <button onClick={handleClick}>Send Message!</button>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                    <br></br>
                    </div>
                    )
                })}
        </div>
        </>
    )
}