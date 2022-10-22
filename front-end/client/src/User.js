import './CSS/User.css';
import { Link } from 'react-router-dom';
const Users = ({user, title}) => {
    return (
        <div className='container'>
            {/* <h2>{title}</h2> */}
            {user.map((user, i) => (
                <div className='square' key={user.id}>
                    <div className='blueLinks'>
                        <Link to={`/usersContract/${user.id}`}>
                    <h2 className="h1">{user.username}</h2>
                    <p>GroupId: {user.privacyGroupId}</p>
                    <p>Publickey: {user.address}</p>
                    <p>Node : {user.node}</p>
                    <p>Group : {user.tenant}</p>
                    </Link></div>                    
                </div>
            ))}
        </div>
    )
}

export default Users;