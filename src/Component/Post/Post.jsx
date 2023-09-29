import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post;
    return (
             <div className=" card w-auto bg-slate-300 shadow-xl">
            <div className="card-body flex justify-center">
                {/* <h2 className="card-title ">Post Id: {id}</h2> */}
                <p>Post Title: {title}</p>
               
            </div>
            <Link className='text-blue-500 font-bold' to={`/post/${id}`}>Show Details</Link>
        </div>

    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;