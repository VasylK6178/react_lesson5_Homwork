import {useEffect, useState} from "react";
import {getPosts} from "../../components/posts/Posts";
import Post from "../../components/post/Post";


export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect( () => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>);

}