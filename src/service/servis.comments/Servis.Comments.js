import {useEffect, useState} from "react";
import {getComments} from "../../components/comments/Comments";
import Comment from "../../components/comment/Comment";


export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect( () => {
        getComments().then(value => setComments([...value]));
    }, []);

    return (
        <div>
            {
                comments.map( value => <Comment item={value} key={value.id}/>)
            }
        </div>);
}
