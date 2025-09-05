import { Link } from 'react-router-dom';
import users from '../data/users.json';

function UserList() {
    return (
        <div>
            {users.map((user) => (
                <Link key={user.id} to={`/users/${user.id}`}>
                    <h2>{user.name}</h2>
                </Link>
            ))}
        </div>
    );
}

export default UserList;
