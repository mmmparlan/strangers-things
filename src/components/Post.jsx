import {fetchPosts} from '../API/api.js'
import {useState,useEffect} from 'react'


export default function Post({token}){
    const [allPost,setAllPost] = useState(null)

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

//    allPostObj = fetchPosts(token);
//    setAllPost(allPostObj)
    console.log('outside useEffect)');
    console.log(allPost.data.posts);
    const justPosts = allPost.data.posts;
    console.log('outside useEffect');
    console.log(justPosts)
//    console.log(allPost.data);

    return (
        <>
        <h3>View All Our Posts Here. We Hope You Find That Thing You Were Looking For!</h3>
        <div>

        {allPost.data.posts.map((post) => {
                    return (
                    <table>
                    <thead>
                        <tr key="tHead">
                        <th colSpan="3">Post: {post.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key="tbody">
                    <td key='postDescription'>Description</td>
                    <td key='postDeliver'>Will Deliver</td>
                    <td key='postPrice'>Price</td>
                    </tr>
                    <tr key={post._id}>
                    <td key={post.title}>{post.title}</td>
                    <td key={post.description}>{post.description}</td>
                    <td key={post.price}>{post.price}</td>
                    </tr>
                    </tbody>
                    </table>
                    )
                })}
        </div>
        </>
    )
}