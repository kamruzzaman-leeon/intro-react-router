import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="">
            <h1>My Website</h1>
            <ul className="flex flex-row justify-center gap-20 bg-green-100 " >
                
                <Link to="/">Home</Link>
                <Link to ="/users">Users</Link>
                <Link to="/about">About</Link>
                 <Link to="/contact">Contact</Link> 
            </ul>
          
          
          
        </div>
    );
};

export default Header;