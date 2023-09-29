import { Link, useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    const {id, title, body} = posts;
    return (
        <div>
            <h2>
                Total Post: {posts.length}
            </h2>
            <div className=" grid md:grid-cols-3 gap-6 ">
                {
                    posts.map(post =><Post key={id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;