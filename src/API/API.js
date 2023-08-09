


const cohortName = '2302-ACC-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

const registerUser = async (user) => {
    try {
        const response = await fetch(
            `${BASE_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username:`${user.username}`,
                        password:`${user.password}`
                    }
                })
            });
            const result = await response.json();
            console.log(result)
            return result
            //returns an obj with the token: string
    } catch (err) {
        console.error(err);
    }
}

const login = async (user) => {
    //user should be an object with username and password. required
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                user: {
                    username: `${user.username}`,
                    password: `${user.password}`
                }
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err){
        console.error(err);
    }
}

const fetchMyData = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
        //result is a user object with the properties user.posts .messages ._id .username
    } catch (err){
        console.error(err);
    }
}
//optional, pass in a token to set isAuthor for their respected posts
const fetchPosts = async (token) => {
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.json();
        console.log(result);
        return result
        //returns an array of objects called posts
        //if isAuthor === true {hide sendMessage}
    } catch (err){
        console.error(err);
    }
}

const makePost = async (token,post) => {
    //post should be an object and is required along with a token
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post:{
                    title: `${post.title}`,
                    description: `${post.description}`,
                    price: `${post.price}`,
                    willDeliver: true
                }
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

const updatePost = async(token,postId,post) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: `${post.title}`,
                    description: `${post.description}`,
                    price: `${post.price}`
                }
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

const deletePost = async (token,postId) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err)
    }
}

const postMessage = async (token,postId,message) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: `${message}`
                }
            })
        });
        const result = response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err)
    }
}

