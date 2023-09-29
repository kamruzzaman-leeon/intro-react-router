import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    const {id, title, body}= post;
    return (
        <div>
            <h2>Post ID: {id}</h2>
            <h3>Title: {title}</h3>
            <p><small>{body}</small></p>
            <button className="btn btn-warning" onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;