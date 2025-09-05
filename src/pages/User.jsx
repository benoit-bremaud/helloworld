import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import users from '../data/users.json';

function User() {
    let { id } = useParams();

    const [user, setUser] = useState();

    useEffect (() => {
        setUser(
            users.find(
                (u) => u.id === parseInt(id)
            )
        );
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

export default User;
