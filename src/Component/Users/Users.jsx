import User from '../user/user';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    return (
        <div >
            <h2>Users: {users.length}</h2>
            <div className='grid md:grid-cols-3 gap-5 p-2'>
            {
                users.map((user) => 
                <User key={user.id} data={user}></User>)
            }
            </div>
            
        </div>
    );
};

export default Users;