import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate =  useNavigate();
    const handleShowDetails = () => {
      
      navigate(`/post/${id}`);
    }
    return (
        <div className=" card w-auto bg-slate-300 shadow-xl">
            <div className="card-body flex justify-center">
                {/* <h2 className="card-title ">Post Id: {id}</h2> */}
                <p>Post Title: {title}</p>

            </div>
            <Link className='text-blue-500 font-bold' to={`/post/${id}`}>Show Details</Link>
            <button className='btn btn-info ' onClick={handleShowDetails}>Show Details</button>
        </div>

    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;