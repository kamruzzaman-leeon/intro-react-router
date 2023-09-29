import PropTypes from 'prop-types';
const User = ({data}) => {
    const {name,username,email,phone}= data;
    return (
        <div className=" card w-auto bg-slate-300 shadow-xl">
   <div className="card-body flex justify-center">
    <h2 className="card-title ">{name}Graham</h2>
    <p>{username}</p>
    <p>{email}</p>
    <p>{phone}</p>
   
  </div>
</div>
    );
};

User.propTypes = {
    data: PropTypes.object
}


export default User;