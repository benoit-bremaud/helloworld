import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function UserList() {
    const url = "http://localhost:5000/users/"
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        })();
    }, []);

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
